exports.up = async (knex) =>
  knex.schema.raw(`
    CREATE TABLE public.<%= apiName %> (
      id uuid NOT NULL
    );
  `);

exports.down = async (knex) =>
  knex.schema
    .dropTableIfExists('<%= apiName %>');
