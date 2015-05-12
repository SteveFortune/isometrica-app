module.exports = function(app) {

  console.log('Create sample models');

  var User = app.models.IsometricaUser;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Account = app.models.Account;

  var sampleAccounts = [
    { 'subscriptionType' : 'free', 'name' : 'LinQed' },
    { 'subscriptionType' : 'paid', 'name' : 'ZetaComm' },
  ];

  var sampleUsers = [
    {firstName : 'Mark', lastName : 'Leusink', name : 'Mark Leusink',
    username: 'mark@isometrica.com', email: 'mark@isometrica.com', password: 'isometrica'},
    {firstName : 'Steve', lastName : 'Ives', name : 'Steve Ives', 
    username: 'steve@isometrica.com', email: 'steve@isometrica.com', password: 'isometrica'},
    {firstName : 'Jack', lastName : 'Herbert', name : 'Jack Herbert',
    username: 'jack@isometrica.com', email: 'jack@isometrica.com', password: 'isometrica'}
  ];

  Account.find( {
    where : { name : 'LinQed' }
  }, function (err, res) {

    if (res.length === 1 ) {

      console.log('Sample accounts already exist');

    } else if (res.length === 0 ) {

      //sample accounts do not exist yet: create sample accounts & users

      Account.create( sampleAccounts , function(err, accounts) {
          if (err) throw err;

          console.log(accounts.length + ' sample accounts created'); 

          //create 3 sample users, link them to first account
          accounts[0].users.create( sampleUsers,
              function(err, users) {
                console.log('sample users created in ' + accounts[0].name);

                //add first sample user to second account
                accounts[1].users.add( users[0], function(err) {
                  if (err) throw err;
                  console.log('added ' + users[0].email + ' to ' + accounts[1].name );

                });

              });

        } );

    } else {
      console.log('sample users already created');
    }

  });

};