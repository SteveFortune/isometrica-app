
# Assessment Progress

### Objectives

- Integrate Jack Herbert’s HTML with the existing system.
- Allow users to associate data with a given plan.
- Add basic validation.

### Tasks Complete

- Integrated <strike>[V5 HTML](http://clients.jackherbert.com/resilify/v5/core-system.html)</strike> [V6 HTML](http://clients.jackherbert.com/resilify/v6/core-system.html) with existing system:

	- _Note_ this has been updated since I worked on it.
	- Text fields don’t have the `x` buttons or expand buttons.

- Forms work:

	- Users can now add new items and save collections of items.
	- On save, the new copy of the collection is associated with the plan.
	- If the dialog is dismissed the changes are discarded.

- Added form validation:

	- `Name` fields are required.
	- Form validation is live.
	- Won’t let you save data in an anomalous state (i.e. if forms are invalid).
	- Collection limits are implemented as per requirements.
	- Can’t clear lists if they are empty.
	- Confirmation is required before clearing lists.

- Collection length badges are live.

### Tasks Incomplete

- Not all forms are included, only the ones specified in initial sketches.
- Associated data is mocked on creation of a plan; the dummy dependencies, roles, etc are all transiently associated with the plan.
- No persistence: new changes are not persisted between page navigations.
- If forms are dirty on dismiss, confirmation dialog is not shown.

### Progress Notes

- Not sure how the activities and processes items are meant to work. Assumed that the cog icon should appear for every item.
- Note sure how the original ‘trash’ icon is meant to work for lists. Assumed that it clears the list.
- Problems with the style sheet:

	- Jack Herbert’s latest SASS isn’t in the source code repository - had to scrape it from the website.
	- This is a bit of a hack, as a result certain other pages are broken and styling isn't identical to Jack’s.
	- This is fixed easily by integrating CSS correctly.

### Additional Tasks

- Setup vagrant dev environment.
- Added `.gitignore`.
