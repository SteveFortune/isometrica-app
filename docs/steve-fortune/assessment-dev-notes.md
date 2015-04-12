
# Dev Notes

My development notes: a place to document my working assumptions.

### Assumption: Navigation to v5 Core System

- Note sure where the Core System interface is meant to go.
- Initially I assumed that it replaced this interface: http://resilify.linqed.eu:3000/#/canvas/54db7040b15186340b03977c
- But now not so sure.
- So I'm going to add `V5 Core System` as a temporary plan type.
- Creating a `V5 Core System` plan will take you to the v5 interface.
- In the future, I'm expecting this to be placed appropriately in the application's navigation hierarchy.

_Note: going to update this to 'V6'_

<strike>### Assumption: v5 Design + Form Association

- Forms 5[e, b, c, d] are for Core System 5a (which is a newer version of the v5 core system design).
- I'm going to arbitrarily map the forms to the different sections in the core system design for now.
- My assumption is that this is ok for the scope of the assessment.
- Might amend the v5 HTML sections later down the line to be inline with 5a.</strike>

_Implemented v6 design. Found Jack Herbert's HTML_

### Hack: Copied Scraped CSS into Client

- Jack Herbert's CSS is generated using SASS
- The existing SASS file does not include some of the styling of the new designs
- I've copied the CSS directly from my scraped site into the client's `resilify.css` file
- This has broken the Business Overview page.
- At one point, I tried 'merging' the two auto-generated css files using `git add --patch` and manually editing hunks to be committed.
- Did not work. For the purposes of this assessment I've had to hack in the CSS.

### Assumption: DRY vs DAMP for Modal Dialogs

- There is a fair bit of code duplication in the modal dialog HTML.
- For example, the `roles` modal dialog is pretty much identical to the `productsAndServices` dialog.
- I _haven't_ just created 1 generic modal dialog to manipulate both collections because:

	- The rendering of the role entities might change completely independently of the products and services.
	- Implementing a 'generic' modal dialog might tie us into a limiting design that we may have to revert later down the line anyway, if the 2 entity attributes diverge significantly.


### Assumption: Deleting Lists

- Not sure how the 'trash' button is meant to be implemented.
- Assumed that its meant to just clear the list.
