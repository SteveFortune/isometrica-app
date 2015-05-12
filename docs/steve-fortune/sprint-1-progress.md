
# Sprint 1: Address Book Screen

###### Tasks Complete

- Setup address book module
- Setup routes, controllers, etc
- Setup user service (wrapped results in promises)
- Started writing tests
- Refactored some duplication out
- Built initial user list
- Built initial user forms

###### Infinite Scroll 

- Found [ngInfiniteScroll](https://github.com/sroze/ngInfiniteScroll)
- Seems like a popular, well tested library
- Implemented in the initial address book UI

###### Address Books - Adding User Edge Case

- User A is registered as part of organisation A
- User B is registered as part of organisation B
- User B wants to add user A to organsiation B
- How do they do with with duplicating a record in the database with the same `email` key?
- How can we manage this edge case while maintaining database integrity?
- Suggestion: some sort of email invitiation UI, like basecamp.

###### Printing password should not be possible

- Shouldn't be possible to print an accurate `*****` string for the password field.
- Storing password hashes. We shouldn't be able to compute the string length or content.

###### Relations vs Sub-documents

- Whats the difference between a Loopback model relation and a subdocument containing object ids?
- For now, I have favoured creating relations over subdocuments.

###### Unit Testing

- Installed Karma + Jasmine as suggested in [the Angular.js docs](https://docs.angularjs.org/guide/unit-testing)
- Started writing unit tests to cover business logic
- Going to write e2e tests using protractor, soon
- Propose that all tests must pass on feature branches before merge into `develop`
- Code coverage analysis?
- Automated mess detection / linting tools?

###### Use Strict

- Started using strict mode to detect syntactical-oddities

###### Commit Log Convention

- Standard commit log format:

	- 1 short introductory line
	- Proceeding paragraph / bullet points on the details of the commit
	- Wrap text to line char limit in the log
- Introductory message format: `<Task No.> <Message>` where:
	- `<Task No.>` corresponds to a milestone defined in my estimated dev schedule
	- `<Message>` is the introductory line
- Example commit:

		1.1 Started building a UserService
		
		- Adopting Mark's remote/local architecture
		- Pondering a way to encapsulate the boilerplate of checking whether we're online or not
		- Perhaps some sort of abstract factory for all services ?

###### Could we use provider recipe instead of factories for the persistent services?

- Providers might be a better fit for the 'abstract' persistent factory.
- At the moment, every time we call the `UserFactory` it has to instantiate a separate factory based on whether we're online or not.
- Using a provider, we can configure the factories at configure-time only once.
- More efficient.
- Also from the angular.js docs: `You should use the Provider recipe only when you want to expose an API for application-wide configuration that must be made before the application starts. This is usually interesting only for reusable services whose behavior might need to vary slightly between applications.`
- Psuedo-code example:

		app.provider('PersistentFactory', function(...) {
		
			this.$get = $rootScope.online ? {
		
				all: function(page) {
					...
				},
		
				findOneBy: function(predicate) {
					...
				},
		
				insert: function(newUser) {
					...
				},
		
				deleteById: function(userId) {
					...
				},
		
				updateById: function(userId, user) {
					...
				}
		
			} : {
		
				all: function(page) {
					...
				},
		
				findOneBy: function(predicate) {
					...
				},
		
				insert: function(newUser) {
					...
				},
		
				deleteById: function(userId) {
					...
				},
		
				updateById: function(userId, user) {
					...
				}
		
			};
			
		});
	
- Then we could create some sort of helper function for registering these providers:


		...
		
		function registerPersistentProvider(module, name, remoteService, localService) {
			module.provider(name, function() {
				this.$get = online ? remoteService : localService;
			});
		}
		
		...
		
		isa.registerPersistentProvider(app, 'UserService', {
			all: function() {...}
			...
		}, {
			all: function() {...}
			...
		});
		
	