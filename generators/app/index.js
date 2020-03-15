"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const _ = require("lodash");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the funkadelic ${chalk.red(
          "generator-apollo-knex"
        )} generator! Are you ready to get wild?`
      )
    );
    this.log(
      "We are going to guide you through creating your an apollo graphql scaffold"
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "serviceName",
        message: "Your project name",
        default: this.options.appname || this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Your projects package.json description",
        default: "This is a super cool apollo-knex generator"
      },
      {
        type: "input",
        name: "gitUrl",
        message: "Your git url",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "Author for package.json file",
        default: ""
      },
      {
        type: "input",
        name: "email",
        message: "Email for the author in the package.json file",
        default: ""
      },
      {
        type: "input",
        name: "composeName",
        message: "Name for your docker compose service name",
        default: "api"
      },
      {
        type: "input",
        name: "name",
        message: "File name for your sample schema file",
        default: "sample"
      },
      {
        type: "input",
        name: "apiName",
        message:
          "What would you like the name of the first sample schema to be? (You will probably replace this but just here to get you started)",
        default: "sample"
      },
      {
        type: "input",
        name: "tableName",
        message:
          "This is the table name that will map to your sample graphql schema.",
        default: "sample"
      }
    ]);
  }

  writing() {
    const apiNameCap = _.capitalize(this.answers.apiName);
    this.fs.copyTpl(
      this.templatePath("tslint.json"),
      this.destinationPath(`${this.answers.serviceName}/tslint.json`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("tsconfig.json"),
      this.destinationPath(`${this.answers.serviceName}/tsconfig.json`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("README"),
      this.destinationPath(`${this.answers.serviceName}/README.md`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("pretty"),
      this.destinationPath(`${this.answers.serviceName}/.prettierrc`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("prettierignore"),
      this.destinationPath(`${this.answers.serviceName}/.prettierignore`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("nodemon.json"),
      this.destinationPath(`${this.answers.serviceName}/nodemon.json`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("license"),
      this.destinationPath(`${this.answers.serviceName}/license`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("knexfile.js"),
      this.destinationPath(`${this.answers.serviceName}/knexfile.js`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("gitignore"),
      this.destinationPath(`${this.answers.serviceName}/.gitignore`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("dockerignore"),
      this.destinationPath(`${this.answers.serviceName}/.dockerignore`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("Dockerf"),
      this.destinationPath(`${this.answers.serviceName}/Dockerfile`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("docker-compose"),
      this.destinationPath(`${this.answers.serviceName}/docker-compose.yml`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("env"),
      this.destinationPath(`${this.answers.serviceName}/.env`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("util/wait-for-it.sh"),
      this.destinationPath(`${this.answers.serviceName}/util/wait-for-it.sh`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/server"),
      this.destinationPath(`${this.answers.serviceName}/src/server.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/schema"),
      this.destinationPath(`${this.answers.serviceName}/src/schema.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/main"),
      this.destinationPath(`${this.answers.serviceName}/src/main.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/database"),
      this.destinationPath(`${this.answers.serviceName}/src/database.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/context"),
      this.destinationPath(`${this.answers.serviceName}/src/context.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/schemas/index"),
      this.destinationPath(`${this.answers.serviceName}/src/schemas/index.ts`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/schemas/sample"),
      this.destinationPath(
        `${this.answers.serviceName}/src/schemas/${this.answers.name}/${this.answers.name}.ts`
      ),
      {
        ...this.answers,
        apiNameCap
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/schemas/sample.spec"),
      this.destinationPath(
        `${this.answers.serviceName}/src/schemas/${this.answers.name}/${this.answers.name}.spec.ts`
      ),
      {
        ...this.answers,
        apiNameCap
      }
    );

    this.fs.copyTpl(
      this.templatePath("db/migrations/20180128104235_initial"),
      this.destinationPath(
        `${this.answers.serviceName}/db/migrations/20180128104235_initial.js`
      ),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("db/seeds/initial"),
      this.destinationPath(`${this.answers.serviceName}/db/seeds/initial.js`),
      {
        ...this.answers
      }
    );

    this.fs.copyTpl(
      this.templatePath("package"),
      this.destinationPath(`${this.answers.serviceName}/package.json`),
      {
        ...this.answers
      }
    );
  }

  install() {
    this.npmInstall(null, {}, { cwd: this.answers.serviceName });
  }
};
