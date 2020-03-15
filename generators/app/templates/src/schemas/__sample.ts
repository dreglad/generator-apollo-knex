const tableName = '<%= tableName %>';

export const typeDef = `
  extend type Query {
    <%= apiName %>(id: String!): <%= apiNameCap %>!
  }

  extend type Mutation {
    <%= apiName %>(id: String!): <%= apiNameCap %>
  }

  type <%= apiNameCap %> {
    id: String!
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
