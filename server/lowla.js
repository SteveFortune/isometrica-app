(function() {
  module.exports = {
    configureRoutes: configureRoutes,
    hookModel: hookModel
  };

  var syncer;
  var io;
  var app;

  function configureRoutes(_app) {
    app = _app;

    io = require('socket.io')(app.server);
    var lowla = require('lowladb-node');
    var lowlaMongo = require('lowladb-node-mongo');

    var lowlaConfig = {
      datastore: new lowlaMongo({mongoUrl: 'mongodb://127.0.0.1/lowladb'}),
      notifier: ioNotify
    };

    console.log('Initializing LowlaDB Syncer');
    syncer = new lowla.Syncer(lowlaConfig);
    syncer.configureRoutes(app);

    app.get('/_lowla/pull', lowlaPullHandler);
    app.post('/_lowla/pull', lowlaPullHandler);
    app.post('/_lowla/push', lowlaPushHandler);
  }

  function hookModel(model) {
    model.observe('before save', lowlaBeforeSaveHook);
    model.observe('after save', lowlaAfterSaveHook);
    model.observe('after delete', lowlaAfterDeleteHook);
  }

  function ioNotify(eventName, payload) {
    //console.log('Emitting LowlaDB event %s', eventName);
    io.sockets.emit(eventName, payload)
  }

  function lowlaBeforeSaveHook(ctx, next) {
    if (ctx.instance) {
      ctx.instance._version = new Date().getTime();
    }
    else {
      ctx.data._version = new Date().getTime();
    }

    next();
  }

  function lowlaAfterSaveHook(ctx, next) {
    var idPrefix = 'db.' + ctx.Model.modelName;
    var payload;

    if (ctx.instance) {
      payload = {
        modified: [
          {
            id: idPrefix + '$' + ctx.instance.id,
            version: ctx.instance._version,
            clientNs: idPrefix
          }
        ]
      }
    }
    else {
      if (ctx.where.id) {
        payload = {
          modified: [
            {
              id: idPrefix + '$' + ctx.where.id,
              version: ctx.data._version,
              clientNs: idPrefix
            }
          ]
        }
      }
      else {
        console.log('An update was made without an ID query, update is lost!');
      }
    }

    if (payload) {
      syncer.updateWithPayload(payload);
    }

    next();
  }

  function lowlaAfterDeleteHook(ctx, next) {
    if (ctx.where.id) {
      var payload = {
        deleted: ['db.' + ctx.Model.modelName + '$' + ctx.where.id]
      };
      syncer.updateWithPayload(payload);
    }
    else {
      console.log('A delete was made without an ID query, delete is lost!');
    }
    next();
  }

  function lowlaPullHandler(req, res) {
    var ids = req.body && req.body.ids;
    if (!ids && req.query.id) {
      ids = [req.query.id];
    }

    if (ids) {
      var writeCount = 0;
      ids.forEach(function(id) {
        if (!id) {
          return;
        }

        var parts = _splitId(id);
        var modelName = parts.collectionName;
        var lbId = parts.id;

        app.models[modelName].findById(lbId, function cb(err, instance) {
          if (!writeCount) {
            res.write('[\n');
          }
          else {
            res.write(',\n');
          }
          ++writeCount;

          if (instance) {
            res.write(JSON.stringify({id: id, clientNs: parts.namespace, deleted: false}) + ',\n');
            res.write(JSON.stringify(instance.toObject()));
          }
          else {
            res.write(JSON.stringify({id: id, clientNs: parts.namespace, deleted: true}));
          }

          if (writeCount == ids.length) {
            res.end('\n]');
          }
        })
      });
    }
    else {
      res.sendStatus(400);
    }
  }

  function lowlaPushHandler(req, res) {
    var docs = req.body && req.body.documents;
    if (!docs) {
      console.log('No documents sent to Lowla PUSH handler');
      res.sendStatus(400);
      return;
    }

    var writeCount = 0;
    for (var i = 0; i < docs.length; i++) {
      var _lowla = docs[i]._lowla;
      var parts = _splitId(_lowla.id);
      var modelName = parts.collectionName;
      var lbId = parts.id;

      if (0 == writeCount) {
        res.write('[\n');
      }
      else {
        res.write(',\n');
      }
      ++writeCount;

      if (_lowla.deleted) {
        app.models[modelName].destroyById(lbId, (function(_lowla, writeCount) {
          return function(err) {
            if (!err) {
              res.write(JSON.stringify({
                id: _lowla.id,
                clientNs: parts.namespace,
                version: _lowla.version,
                deleted: true
              }));
            }
            else {
              //TODO
              console.log('Unable to delete %s', _lowla.id);
            }

            if (writeCount == docs.length) {
              res.end('\n]');
            }
          }
        }(_lowla, writeCount)));
      }
      else {
        var ops = docs[i].ops['$set'];
        var updates = {};
        for (var key in ops) {
          if (ops.hasOwnProperty(key)) {
            updates[key] = _decodeSpecialTypes(ops[key]);
          }
        }
        ops = docs[i].ops['$set'];
        for (var key in ops) {
          if (ops.hasOwnProperty(key)) {
            updates[key] = null;
          }
        }

        app.models[modelName].findById(lbId, (function(updates, unsets, modelName, lowlaId, writeCount) {
          return function(err, obj) {
            if (err) {
              //TODO
              console.log('Error finding %s in %s model', lowlaId, modelName);
              return;
            }

            if (obj) {
              obj.updateAttributes(updates, function(err, obj) {
                res.write(JSON.stringify({
                    id: 'db.' + modelName + '$' + obj.id,
                    clientNs: 'db.' + modelName,
                    version: obj._version,
                    deleted: false
                  }) + ',\n');
                res.write(JSON.stringify(obj.toObject()));
                if (writeCount == docs.length) {
                  res.end('\n]');
                }
              });
              if (unsets) {
                for (var key in unsets) {
                  if (unsets.hasOwnProperty(key)) {
                    obj.unsetAttribute(key);
                  }
                }
              }
            }
            else {
              app.models[modelName].create(updates, function(err, obj) {
                if (err) {
                  //TODO
                  console.log('Error creating %s instance', modelName);
                  return;
                }

                res.write(JSON.stringify({
                    id: 'db.' + modelName + '$' + obj.id,
                    clientNs: 'db.' + modelName,
                    version: obj._version,
                    clientId: lowlaId,
                    deleted: false
                  }) + ',\n');
                res.write(JSON.stringify(obj.toObject()));
                if (writeCount == docs.length) {
                  res.end('\n]');
                }
              });
            }
          }
        }(updates, docs[i].ops['$unset'], modelName, _lowla.id, writeCount)));
      }
    }
  }

  function _splitId(lowlaId) {
    var dot = lowlaId.indexOf('.');
    var dollar = lowlaId.indexOf('$');
    if (-1 === dot || -1 === dollar) {
      throw new Error('Internal error: Lowla ID must be in the format database.collection$id');
    }
    var dbName = lowlaId.substring(0, dot);
    var id = null;
    var work = lowlaId;
    if (-1 != dollar) {
      id = lowlaId.substring(dollar + 1);
      work = lowlaId.substring(0, dollar);
    }
    var collectionName = work.substring(dot + 1);
    return {
      dbName: dbName,
      collectionName: collectionName,
      id: id,
      namespace: dbName + '.' + collectionName,
      lowlaId: lowlaId
    };
  }

  function _decodeSpecialTypes(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        if ('object' === typeof val) {
          if (val.hasOwnProperty('_bsonType')) {
            switch (val._bsonType) {
              case 'Date':
                obj[key] = new Date(parseInt(val.millis));
                break;
            }
          }
          else {
            this.decodeSpecialTypes(val);
          }
        }
      }
    }
    return obj;
  }
})();
