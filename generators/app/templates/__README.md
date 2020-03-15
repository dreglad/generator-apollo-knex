# <%= serviceName %>
This project is a GraphQL API generated via the [apollo-knex generator](https://github.com/danwakeem/apollo-knex).

## Setup
The only thing you will need to do to set up your local dev environment is pull down the deps.
```
> npm ci
```

If you need to add new schemas you will need to install the schema generator.

```
> npm i generator-apollo-knex -g
```

## Run the app locally
This application takes advantage of docker to run the full application.
```
docker-compose up -d
```

## Connection the graphiql interface
Go to `localhost:4000/graphql` in your browser.

## Run a Seed of the database
Once you have stood up the app in docker you may want to get some test data into you docker db. The easiest way to do this would be to run the knex seed script from a running quiz docker container.

```
> docker exec -it svc-quizzes_quizzes_1 /bin/bash # This will ssh you into the running docker container
> npm run knex seed:run # This will populate your db with the seed data provided in the project
```

## Adding new schemas
```
> yo apollo-knex:schema
```

This will open a prompt to create the new schema.
