
# Dev Notes

My development notes: a place to document my working assumptions.

### Assumption: Navigation to v5 Core System

- Note sure where the Core System interface is meant to go.
- Initially I assumed that it replaced this interface: http://resilify.linqed.eu:3000/#/canvas/54db7040b15186340b03977c
- But now not so sure.
- So I'm going to add `V5 Core System` as a temporary plan type.
- Creating a `V5 Core System` plan will take you to the v5 interface.
- In the future, I'm expecting this to be placed appropriately in the application's navigation hierarchy.

### Assumption: v5 Design + Form Association

- Forms 5[e, b, c, d] are for Core System 5a (which is a newer version of the v5 core system design).
- I'm going to arbitrarily map the forms to the different sections in the core system design for now.
- My assumption is that this is ok for the scope of the assessment.
- Might amend the v5 HTML sections later down the line to be inline with 5a.

### Hack: Copied Scraped CSS into Client

- Jack Herbert's HTML is generated using SASS
- The existing SASS file does not include some of the styling of the new v5 design
- I've copied the CSS directly from my scraped site into the client's `resilify.css` file
- This has broken the Business Overview page.
- At one point, I tried 'merging' the two auto-generated css files using `git add --patch` and manually editing hunks to be committed.
- Did not work. For the purposes of this assessment I've had to hack in the CSS.

### Convention: Avoiding Doing Anything Clever in Directives

- I've avoided querying any data or doing anything other than DOM manipulation in directives.
- I read somewhere (can't remember where) that directives should be treated as views and shouldn't have to handle complex business logic. They are only responsible for interacting with the DOM API.
- I've exposed a callback API for directives that might want to trigger subsequent events on interaction.
