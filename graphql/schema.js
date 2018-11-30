const graphql = require("graphql");
const UniversityType = require("./UniversityType");
const University = require("./../models/Universities");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    university: {
      type: UniversityType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return University.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
