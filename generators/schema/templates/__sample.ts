const tableName = '<%= tableName %>';

export const typeDef = `
  extend type Query {
    <%= apiName %>(id: ID!): <%= apiNameCap %>
  }

  extend type Mutation {
    <%= apiName %>(id: ID!): <%= apiNameCap %>
  }

  type <%= apiNameCap %> {
    id: ID!
  }
`;

export const resolvers = {
  Query: {
    <%= apiName %>(_, { id = '' }, context) {
      return context.db
        .query(tableName)
        .where({ id })
        .first();
    },
  },
  Mutation: {
    async <%= apiName %>(_, args, context) {
      const [<%= apiName %>] = await context.db
        .query(tableName)
        .insert(args)
        .returning('*');

      return <%= apiName %>;
    }
  }
};
