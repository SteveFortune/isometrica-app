
# Sprint 2: Address Book Screen

### Tasks

###### Complete

- Full edit user form
- Full edit user form validation (client and server sides)
- Full new user form validation (client and server sides)
- Overview screen integration
- Temporary clientside search functionallity

###### Incomplete

- Contact functionallity
- Validation styling in user forms as in home page
- Minimum of 8 chars for password (whatever Basecamp)
- HTML integration with keychain (guidelines)
- Select control integration
- Guidance header
- Provider recipe instead of factories for abstract persistent service factories
- Cross browser testing. Note that I did test with iPad user agent - bug with forms just not displaying

### Dev Notes

- Embeds many issues; seems as though these relations are available for manipulating in the front end via an underscored property. E.g. `phoneNumbers` can be accessed via `_phoneNumbers`. Not sure whether this a valid use or not.
- Generic form input directive. Still needs some work; proposing that I use it for the entire address book before we roll out across other parts of the application.
- Loopback issues with validation. Password is validated after its hashed.