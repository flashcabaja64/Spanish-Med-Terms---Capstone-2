# Learn Spanish Medical Terminology - Spaced Repetition Capstone

* Link to live app: https://hubert-spanishmedterms.now.sh/
* Link to live server: https://stormy-wildwood-24680.herokuapp.com/api

* Link to client repo: https://github.com/flashcabaja64/Spanish-Med-Terms-Capstone2-Client
* Link to API repo: https://github.com/flashcabaja64/Spanish-Med-Terms-Capstone2-Server

## Teammates: Badri, Hubert, and Laura

### Summary
Get a simple start with learning Spanish Medical Terminology by way of spaced repetition. Users can first navigate to 'Study Mode' where they can study the spanish terms and english translations. Once they feel comfortable and want to prove their translation ability, they can switch over to 'Quiz Mode' and test their skills.

### Technology
#### Front-End
* React
* CSS
* Zeit (Website Host)
* Cypress (Testing)

#### Back-End
* Node.js
* Express.js
* PostgreSQL (Database)
* Mocha/Chai (Testing)
* Heroku (Server/Database Host)

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
