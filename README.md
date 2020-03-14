# generator-apollo-knex [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Generator for a simple apollo server integrated with knex

I should point out this was inspired by the [apollo-typescript-starter](https://github.com/kylealwyn/apollo-typescript-starter). There are a few changes I made to this config vs. the original but thought it would be nice to have a generator around this.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-apollo-knex using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-apollo-knex
```

Then generate your new project:

```bash
yo apollo-knex
```

This project configures Knex with `postgres` out of the box but you can change this by installing a compatible [Knex `npm`](http://knexjs.org/#Installation-client) database package and adding the `DATABASE_CLIENT` name to the `.env` file.

### Generating a new schema
This generator also includes a CLI to create a new graphql schema that will automatically get picked up by the server.

To generate a new schema run and follow the prompts:

```bash
yo apollo-knex:schema
```

**Important:** This doesn't not create a new Knex migrate file for you. If the new schema you are creating is supposed to link up with your database, then follow the [db migration pattern in Knex](http://knexjs.org/#Migrations).

> There is a script in the `package.json` file for you project that will allow you to run knex commands without installing knex globally. Example: `npm run knex migrate:make migration_name`

 ## Project structure
Below is a default generated project structure and some brief explanation for each folder/file
 ```
 .
├── Dockerfile                           # Standard Dockerfile for building to a container image
├── README.md                            # README for the project. (I would appreciate input on how to make this better)
├── db                                   # Folder containing all of the Knex migrations/seed data
│   ├── migrations
│   │   └── 20180128104235_initial.js    # Initial database schema (Set up as a postgres schema, if you change the db be sure to change this as well)
│   └── seeds
│       └── initial.js                   # Seed data that can be run in your docker container
├── docker-compose.yml                   # Compose file that contains a db instance and your apollo app
├── knexfile.js                          # Builds the Knex connection config that is fed into the Database.ts file
├── LICENSE                              # Some license file
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── context.ts                       # Where the database connection gets attached to the graphql context. You would want to add data loaders and things here depending on what you are doing.
│   ├── database.ts                      # Manages the actual database connection
│   ├── main.ts                          # Manages closing out the db connection
│   ├── schema.ts                        # Aggregates all the schemas in the schemas folder into a single graphql schema that is fed into  the ApolloServer config
│   ├── schemas
│   │   ├── index.ts                     # Index file to export all of your schemas so it is easily digested by the schema.ts file
│   │   ├── sample
│   │   │   ├── sample.spec.ts           # Spec with example stubs for database queries
│   │   │   └── sample.ts                # Implementation file for the sample schema
│   └── server.ts                        # Apollo/Express server setup
├── tsconfig.json                        # typescript configuration
├── tslint.json                          # typescript linting options
└── util
    └── wait-for-it.sh                   # A helper I use for waiting for a docker db to be started before starting the application (See example in the package.json file) [1]
 ```

- [1] This is taken directly from the [`wait-for-it`](https://github.com/vishnubob/wait-for-it) repo. I don't know a better way to include this in the project so if you have suggestions, by all means.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [danwakeem](https://www.danwakeem.com)


[npm-image]: https://badge.fury.io/js/generator-apollo-knex.svg
[npm-url]: https://npmjs.org/package/generator-apollo-knex
[travis-image]: https://travis-ci.com/Danwakeem/generator-apollo-knex.svg?branch=master
[travis-url]: https://travis-ci.com/Danwakeem/generator-apollo-knex
[daviddm-image]: https://david-dm.org/Danwakeem/generator-apollo-knex.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Danwakeem/generator-apollo-knex
[coveralls-image]: https://coveralls.io/repos/Danwakeem/generator-apollo-knex/badge.svg
[coveralls-url]: https://coveralls.io/r/Danwakeem/generator-apollo-knex