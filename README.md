# Recruiter Dashboard
![JOIN React Test](./data/Candidate%20Board.png)

## Context

We love to give visual feedback to the recruiters about where their candidate stand in their pipeline.

This app needs to display the list of candidates taken from this API:

GET https://5f98ad0a50d84900163b7c41.mockapi.io/api/candidates

**PAGINATION**

Add query params to GET requests:
`/candidates?page=1&limit=10`

**FILTERING**

Add query params to GET request:
`/candidates?qualified=TRUE` - search qualified candidates


## Design
Screen is provided in /data folder for reference, it doesn't have to look identical, just a visual reference, you can use Material or Bootstrap for UI components

## Requirements

As a Recruiter:
- [ ] I want to be able to view a list of my candidates
- [ ] For each application calculate score:
  - 10% if full name provided
  - 10% if email provided
  - 10% if country provided
  - 20% if phone provided
  - 50% if avatar provided
- [ ] I want by clicking on the "Qualified" button, be able to qualify the candidate (qualified: IN_REVIEW -> YES)
- [ ] I want by clicking on the "Unqualified" button, be able to unqualify the candidate (qualified: IN_REVIEW -> FALSE)
- [ ] I want by clicking on the "X" button, be able to change the state of the candidate to in review (qualified: YES -> IN_REVIEW or NO -> IN_REVIEW)
- [ ] [OPTIONAL] I want to filter by qualified state
- [ ] [OPTIONAL] I want to paginate


## Technical Notes
The app base on create-react-app typescript template.

Also, we added custom `.eslintrc.js` and `.prettierrc`. We are using exactly the same configs in our apps.

Utilize localStorage for managing candidates qualified state and merge it with existing API data.

If the external API is too slow, make sure it's not visible or felt by the user, find a way to make load/wait time a pleasure. Maybe kitten paws loader?

## Tech Stack
- Use ReactJS with TypeScript
- Test your code with unit test
- CSSinJS is a plus
- Take an advantage of using other libraries if you need so

## Instructions

- Run `git init` in this test directory so you can commit your changes locally.
- Commit early and often. We want to be able to check your way of thinking.
- Run command from package.json to start/test/lint your app
- Zip your work from local folder without removing Git history, upload the file to, for example, google drive, and send us the link via email for a review
- Do not spend more than 4 hours on the test working proactively
- Do not exceed a deadline of 12 hours from the moment you received it to sending it back to us
- Communicate early and openly if there are issues, it will add points to your application

## Disclaimer
You don't have to finish all of that, but we would really love to see a working piece.
What's more important for us is to see your way of thinking and priority on tasks during implementation!
