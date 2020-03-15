"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-apollo-knex:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      serviceName: "serviceName",
      author: "person",
      email: "person@example.com",
      composeName: "backend",
      name: "blah",
      apiName: "blah",
      tableName: "blah"
    });
  });

  it("create files", () => {
    assert.file([
      "serviceName/tslint.json",
      "serviceName/tsconfig.json",
      "serviceName/README.md",
      "serviceName/.prettierrc",
      "serviceName/.prettierignore",
      "serviceName/package.json",
      "serviceName/nodemon.json",
      "serviceName/LICENSE",
      "serviceName/knexfile.js",
      "serviceName/.gitignore",
      "serviceName/.dockerignore",
      "serviceName/.env",
      "serviceName/Dockerfile",
      "serviceName/docker-compose.yml",
      "serviceName/util/wait-for-it.sh",
      "serviceName/src/server.ts",
      "serviceName/src/schema.ts",
      "serviceName/src/main.ts",
      "serviceName/src/database.ts",
      "serviceName/src/context.ts",
      "serviceName/src/schemas/index.ts",
      "serviceName/src/schemas/blah/blah.ts",
      "serviceName/src/schemas/blah/blah.spec.ts",
      "serviceName/db/migrations/20180128104235_initial.js",
      "serviceName/db/seeds/initial.js"
    ]);
  });
});
