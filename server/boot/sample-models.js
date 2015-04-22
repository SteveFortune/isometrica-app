module.exports = function(app) {

  console.log('set up default users');

  var User = app.models.IsometricaUser;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  //var Team = app.models.Team;

  var createIfNotExists = function(Model, user, callback) {

    Model.find( {where: {username : user.username}}, function(err, res) {

      if (res.length===0) {
        Model.create(user, function(err, user) {
          console.log('created:', user);

          if (callback) { callback.call(user); }
        });
      } else {

          if (callback) { callback.call(user); }
      }
    });

  };

  createIfNotExists(User, {firstName : 'Steve', lastName : 'Ives', name : 'Steve Ives', username: 'steve@isometrica.com', email: 'steve@isometrica.com', password: 'isometrica'});
  createIfNotExists(User, {firstName : 'Jack', lastName : 'Herbert', name : 'Jack Herbert', username: 'jack@isometrica.com', email: 'jack@isometrica.com', password: 'isometrica'});
  createIfNotExists(User, {firstName : 'Mark', lastName : 'Leusink', name : 'Mark Leusink', username: 'mark@isometrica.com', email: 'mark@isometrica.com', password: 'isometrica'});
  
/*
    // create project 1 and make john the owner
    users[0].projects.create({
      name: 'project1',
      balance: 100
    }, function(err, project) {
      if (err) throw err;

      console.log('Created project:', project);

      // add team members
      Team.create([
        {ownerId: project.ownerId, memberId: users[0].id},
        {ownerId: project.ownerId, memberId: users[1].id}
      ], function(err, team) {
        if (err) throw err;

        console.log('Created team:', team);
      });
    });*/
  /*

    //create project 2 and make jane the owner
    users[1].projects.create({
      name: 'project2',
      balance: 100
    }, function(err, project) {
      if (err) throw err;

      console.log('Created project:', project);

      //add team members
      Team.create({
        ownerId: project.ownerId,
        memberId: users[1].id
      }, function(err, team) {
        if (err) throw err;

        console.log('Created team:', team);
      });
    });
*/

  createIfNotExists( Role, {name: 'admin'} );
};