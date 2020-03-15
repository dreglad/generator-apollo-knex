import { join, dirname, basename } from "path";
import Generator from "yeoman-generator";
import { red } from "chalk";
import yosay from "yosay";

const templateFilePrefix = "__";

const templateFiles = [
  "db/migrations/20200101010000_initial.ts",
  "src/schemas/index.ts",
  "src/schemas/sample.spec.ts",
  "src/schemas/sample.ts",
  "src/context.ts",
  "src/database.ts",
  "src/main.ts",
  "src/schema.ts",
  "src/server.ts",
  "util/wait-for-it.sh",
  ".dockerignore",
  ".env",
  ".gitignore",
  ".prettierignore",
  ".prettierrc",
  "docker-compose.yml",
  "Dockerfile",
  "knexfile.js",
  "LICENSE",
  "nodemon.json",
  "package.json",
  "README.md",
  "tsocnfig.json",
  "tslint.json"
];

export default class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the funkadelic ${red(
          "generator-apollo-knex"
        )} generator! Are you ready to get wild?`
      )
    );

    this.log(
      "We are going to guide you through creating an Apollo Server GraphQL scaffold"
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
        message: "Your project description",
        default: "This is a super cool apollo-knex generator"
      },
      {
        type: "input",
        name: "gitUrl",
        message: "Git repository URL",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "Author in the package.json file",
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
        message: "Name for your Docker Compose service",
        default: "api"
      },
      {
        type: "input",
        name: "name",
        message: "File name for your sample GraphQL schema file",
        default: "sample"
      },
      {
        type: "input",
        name: "apiName",
        message:
          "What would you like the name of the first sample schema to be? (you will probably replace this but just here to get you started)",
        default: "sample"
      },
      {
        type: "input",
        name: "tableName",
        message:
          "This is the table name that will map to your sample GraphQL schema.",
        default: "sample"
      }
    ]);
  }

  writing() {
    templateFiles
      .map(file => ({
        source: join(dirname(file), `${templateFilePrefix}${basename(file)}`),
        destination: join(this.answers.serviceName, file)
      }))
      .forEach(({ source, destination }) => {
        this.fs.copyTpl(
          this.templatePath(source),
          this.destinationPath(destination),
          { ...this.answers }
        );
      });
  }

  install() {
    this.npmInstall(null, {}, { cwd: this.answers.serviceName });
  }
}
