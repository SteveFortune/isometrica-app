module.exports = function(app) {

  console.log('Create sample models');

  var User = app.models.IsometricaUser;
  var Organization = app.models.Organization;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Account = app.models.Account;

  /*
   * Set up some sample accounts & organizations:
   * 
   * Mark is owner for the LinQed account and has a LinQed org
   * Steve and Jack are owners for the ZetaComm account and have a ZetaComm org
  */

  createAccount( 
      { 'subscriptionType' : 'free', 'name' : 'LinQed'},
      [
        {firstName : 'Mark', lastName : 'Leusink', name : 'Mark Leusink',
          username: 'mark@isometrica.com', email: 'mark@isometrica.com', password: 'isometrica'},
      ]
  );
  createAccount( 
    { 'subscriptionType' : 'paid', 'name' : 'ZetaComm'},
    [
        {firstName : 'Steve', lastName : 'Ives', name : 'Steve Ives', 
          username: 'steve@isometrica.com', email: 'steve@isometrica.com', password: 'isometrica'},
        {firstName : 'Jack', lastName : 'Herbert', name : 'Jack Herbert',
          username: 'jack@isometrica.com', email: 'jack@isometrica.com', password: 'isometrica'}
    ] 
  );



   function createAccount( account, owners ) {

    Account.find( {
        where : { name : account.name }
      }, function(err, res) {
      
        if (res.length === 1 ) {

          console.log('Sample account for ' + account.name + ' already exist');
          createOrganization( res[0], owners);

        } else if (res.length === 0 ) {

          //sample account doesn't exist yet: create sample account & users
          
          Account.create( account , function(err, acc) {
              if (err) throw err;

              createOrganization( acc, owners);

          });

        }
      });

  }

  function createAccountOwners( account, org, users) {
    for (var i=0; i<users.length; i++) {
      createUser( account, org, users[i] );
    }
  }

  function createUser( account, org, user) {

      //check to see if the user (user) already exists in the system
      User.find( {
        where : { email : user.email }
      }, function(err, res) {
        if (err) throw err;        

        if (res.length === 0) {

          console.log('user ' + user.email + ' doesn\'t exist yet: create');

          //user doesn't exist yet: create it and add it to the account and org
          User.create( user, function(err, res) {
            console.log('user ' + res.firstName + ' created');

            addToOrg(org, res);
            addToAccount(account, res);

          });

        } else {

          addToOrg(org, res[0]);
          addToAccount(account, res[0]);

        }

      } );

  }

  function addToOrg(org, user) {
    org.users( {
      where : {email : user.email}
    }, function(err, res) {
      
      if (res.length==0) {
        console.log('adding ' + user.email + ' to organization ' + org.name);
        org.users.add(user);
      } else {
       // console.log('user ' + user.email + ' already exists in ' + org.name);
      }
    })
  }
  function addToAccount(account, user) {
    account.owners( {
      where : { email : user.email }
    }, function(err, res) {

      if (res.length == 0 ) {
        console.log('adding ' + user.email + ' to ' + account.name);
        account.owners.add( user);
      } else {
        //console.log(owner.email + 'already linked to ' + account.name);
      }

    })
  }

  function createOrganization( account, users) {

    //create the organization, add th
    Organization.find( {
      where : { name : account.name }
    }, function(err, res) {

      if (res.length == 0) {

        console.log('org ' + account.name + ' doesn\'t exist yet');

        //create org, add users to it

        Organization.create( { name : account.name} , function (err, res) {

          console.log('org ' + res.name + ' created, adding users');
          createAccountOwners( account, res, users);

        });

      } else {

        createAccountOwners( account, res[0], users);

      }

    } );
  }

};
