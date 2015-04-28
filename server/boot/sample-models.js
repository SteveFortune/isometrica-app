module.exports = function(app) {

  console.log('Create sample models');

  var User = app.models.IsometricaUser;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Account = app.models.Account;

  var createUserIfNotExists = function(Model, user, callback) {

    Model.find( {where: {username : user.username}}, function(err, res) {

      if (res.length===0) {
        Model.create(user, function(err, user) {
          console.log('created user %s', user.name);

          if (callback) { callback.call(user); }
        });
      } else {

          if (callback) { callback.call(user); }
      }
    });

  };

  Account.find( {
    where : { name : 'LinQed' }
  }, function (err, res) {

    if (res.length === 0 ) {

      //account doesn't exist yet: create account &  users

      Account.create( {
          'subscriptionType' : 'free',
          'name' : 'LinQed'
        }, function(err, account) {
          if (err) throw err;

          console.log('Account created for ' + account.name); 

          //setup users
          createUserIfNotExists(User, {firstName : 'Steve', lastName : 'Ives', name : 'Steve Ives', 
            username: 'steve@isometrica.com', email: 'steve@isometrica.com', password: 'isometrica',
            accounts : [ { id : account.id, type : 'owner' }] });
          createUserIfNotExists(User, {firstName : 'Jack', lastName : 'Herbert', name : 'Jack Herbert',
            username: 'jack@isometrica.com', email: 'jack@isometrica.com', password: 'isometrica',
            accounts : [ { id : account.id, type : 'owner' }]});
          createUserIfNotExists(User, {firstName : 'Mark', lastName : 'Leusink', name : 'Mark Leusink',
            username: 'mark@isometrica.com', email: 'mark@isometrica.com', password: 'isometrica',
            accounts : [ { id : account.id, type : 'owner' }]});

        } );

    } else {
      console.log('sample models already created');
    }

  });

};