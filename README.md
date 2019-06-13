# Paddle North

Paddle North is a BWCA Trip Planner, intended to provide a user-friendly and informational guide to planning a trip to the Boundary Waters. The goal is to make it easier for anyone who has not been to the BWCA to plan their trip and remove any barriers or lessen anxiety about planning a trip for the first time. It will also be beneficial to more seasoned paddlers in planning future trips based on plans and notes from previous trips.


## Built With

React, Redux, Redux-Sagas, Node.js, Nodemon, PostgreSQL


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- Node.js
- PostgreSQL
- Nodemon

### Installing

To get the development environment running:
1. Download this project
2. `npm install`
3. Create a PostgreSQL database named `bwca_trip_planner`
4. Create a table in the database using the included database.sql file
5. Start the server with `npm run server`
6. Start the client with `npm run client`

<!-- ## Features -->

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy


## Author
Nina Johnson