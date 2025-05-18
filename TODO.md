## NOTES:

logged client is always considered to be of type `User`, company clients are just for demo, and we developers create them.

<!-- npm run dev -- -H 0.0.0.0 -->

# MISSING FEATURES:

- Responsive Design.
- See all connections.
- Data Modifications:
- - Adding posts.
- - Adding comments.
- - Following.
- - Liking.
- - Editing Profile.
- - Editing posts.
- - Editing comments.

### [] find a better way to redirect to profile page

[] fix redirecting when clicking on profile avatars.

[] remove module styles for ui components! (we cant overwrite styles).

[] it rerenders the loading page when error has occurred, then shows the error page.

[] when changing pages in logged, loading is not rendering.

[] how to show added comment?

[] add follow button on posts.

<!-- DONE -->

[x] implement profile page for companies.
[x] WTF are connections? (do we need them?)
[x] header must be sticky.
[x] fix linter. (add tsc --noEmit to package.json)
[x] api's must return array
[x] owner's comment must be in the right side.
[x] rename `userProfile` to `userProfile` in `userProfilePage`
[x] do we need react query? (NO xD)
[x] refactor url for company profile and user profile.
`profile/company/:id`
`profile/user/:id`
[x] fix footer position -> needs to be stuck at the bottom of screen.(not buttom of content)
[x] changed `userSummary` type to `ownerSummary`, check for errors
[x] same change for comments
[x] implement avatar component
[x] add headline as summary
