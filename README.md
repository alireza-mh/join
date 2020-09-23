# Candidate Application & Score Calculator
![JOIN React Test](https://i.imgur.com/msT4Blg.png)

## Context

We love to give visual feedback to the recruiters about where their candidate stand in their pipeline.
Proposed solution consists of 2 screens:
1. *The applicant screen* - filling it in will send the application to the server
1. *The candidate list screen* - where all existing and new candidates can be viewed (reflecting input from the previous screen)

This app needs to display the list of candidates taken from this API: GET https://candidates.free.beeceptor.com/api/candidate
(If API is not available, use file located in this repository under /data/candidates.json) and send a local request instead.

## Design
Screens are provided in /data folder for reference, it doesn't have to look identical, just a visual reference, you can use Material or Bootstrap for UI components

## Requirements
As a Candidate:
- [ ] I want to be able to provide my data in application form without any field being required
- [ ] *[OPTIONAL]* I want to be able to upload my photo

As a Recruiter:
- [ ] I want to be able to view a list of my candidates
- [ ] For each application calculate score:
  - Up to 10% if full name provided
  - 10% if email provided
  - 10% if password provided
  - 20% if phone provided
  - *[OPTIONAL]* 50% if image uploaded (calculate accordingly if implemented or not)
- [ ] I want by clicking on the "..." menu, be able to "delete" the candidate (hide from display)
- [ ] I want by clicking on the "..." menu, be able to change candidate state from "submitted" to "in review" to either "not a fit" or "hired"
  
## Technical Notes
There's no restriction to backend technology, you can e.g.:
- utilize localStorage for candidate data storage (as your backend) and merge it with existing API data
- spin up a NodeJS server

If the external API is too slow, make sure it's not visible or felt by the user, find a way to make load/wait time a pleasure. Maybe kitten paws loader?

## Tech Stack
- Use ReactJS with TypeScript
- Test your code with a preferred library of your choice (feel free to choose either unit tests or E2E tests with Cypress, *we prefer the latter*)
- Linter, CSSinJS is a plus

## Instructions

- Run `git init` in this test directory so you can commit your changes locally.
- Commit early and often. We want to be able to check your way of thinking
- Make the app public, but do not name it JOIN Test or anything like that, we want to avoid exposure 
- Deploy it using the service of your choice (Vercel, Cloud Run, Heroku)
- Zip your work from local folder without removing Git history and send us back via email for a review
- Do not spend more than 4 hours on the test working proactively
- Do not exceed a deadline of 12 hours from the moment you received it to sending it back to us
- Communicate early and openly if there are issues, it will add points to your application

## Disclaimer
You don't have to finish all of that, but we would really love to see a working piece.
What's more important for us is to see your way of thinking and priority on tasks during implementation!
