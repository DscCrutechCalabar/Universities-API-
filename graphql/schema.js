const graphql = require("graphql");
const UniversityType = require("./types/UniversityType");
const University = require("../models/University");
const RootQuery = require("./queries/universities");
const Mutation = require("./mutations/index");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: Mutation
  })
});
