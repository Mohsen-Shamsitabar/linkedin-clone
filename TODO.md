## NOTES:

logged client is always considered to be of type `User`, company clients are just for demo, and we developers create them.

<!-- npm run dev -- -H 0.0.0.0 -->

# MISSING FEATURES:

- Responsive Design.
- See all connections.
- Authentications ( Login / Signin ).
- Data Modifications:
- - Adding posts.
- - Adding comments.
- - Following.
- - Liking.
- - Editing Profile.
- - Editing posts.
- - Editing comments.

### [] api's must return array

### [] find a better way to redirect to profile page

### [] header must be shown when scrolling up.

[] fix redirecting when clicking on profile avatars.

[] owner's comment must be in the right side.

[] WTF are connections? (do we need them?)

[] fix linter

[] fix footer position -> needs to be stuck at the bottom of screen.(not buttom of content)

[] remove module styles for ui components! (we cant overwrite styles).

[] it rerenders the loading page when error has occurred, then shows the error page.

[] when changing pages in logged, loading is not rendering.

[] how to show added comment?

[] refactor url for company profile and user profile.
`profile/company/:id`
`profile/user/:id`

[] do we need react query ?

<!-- IMPORTANT -->

[] implement profile page for companies.

[] add follow button on posts.

[] rename `profileUser` to `userProfile` in `userProfilePage`

<!-- DONE -->

[x] changed `userSummary` type to `ownerSummary`, check for errors
[x] same change for comments
[x] implement avatar component
[x] add headline as summary
