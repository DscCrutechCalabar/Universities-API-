const graphql = require("graphql");
const RootQuery = require("./queries/universities");
const Mutation = require("./mutations/index");

const { GraphQLObjectType, GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: Mutation
  })
});
