# Candidate Application & Score Calculator
![JOIN React Test](https://i.imgur.com/msT4Blg.png)

## Context

We love to give visual feedback to the recruiters about where their candidate stand in their pipeline.
Proposed solution consists of 2 screen:
1 is the applicant screen, where filling it in will send the data to the server and reflect it on
2 applicant list screen, where all existing and new applicants can be viewed

This app needs to display the list of applicants taken from this API: GET https://candidates.free.beeceptor.com/api/candidate
(If API is not available, use file located in this repository under /data/candidates.json) and load send a local request instead.

## Design
Screens are provided in /data folder for reference, it doesn't have to look identical, just a visual reference, you can use Material or Bootstrap for UI components

## Requirements
As a Candidate:
- [ ] I want to be able to provide my data in registration form without any field being required
- [ ] *[OPTIONAL]* I want to be able to upload my photo

As a Recruiter:
- [ ] I want to be able to view a list of my candidates
- [ ] For each applicant calculate score
  - [ ] Up to 10% if full name provided
  - [ ] 10% if email provided
  - [ ] 10% if password provided
  - [ ] 20% if phone provided
  - [ ] *[OPTIONAL]* 50% if image uploaded // calculate accordingly if implemented or not
- [ ] I want by clicking on the "..." menu, be able to "Delete" the candidate (hide from display)
- [ ] I want by clicking on the "..." menu, be able to change Applicant state from "submitted" to "in review" to either "not a fit" or "hired"
  
## Technical Notes
Utilize localStorage for candidate data storage (as your backend) and merge it with existing API data.
Though there's no restriction to backend technology and spinning up NodeJS server is allowed.
If the external API is too slow, make sure it's not visible/filled by the user, find a way to make load/wait time a pleasure.

## Tech Stack
Use ReactJS with TypeScript, test your code with a preferred library of your choice, also feel free to choose either unit tests or E2E tests with Cypress
Linter, CSSinJS is a plus

## Instructions

- Fork this repo
- Commit early and often. We want to be able to check your way of thinking
- Make the app public. Deploy it using the service of your choice (ZEIT, Cloud Run, Heroku)
- Create a pull request
