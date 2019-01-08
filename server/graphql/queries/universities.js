const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");

const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;

// Query
RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    university: {
      type: new GraphQLList(UniversityType),
      args: { acronym: { type: GraphQLString } },
      resolve(parent, args) {
        return University.find({ acronym: args.acronym });
      }
    },
    universities: {
      type: new GraphQLList(UniversityType),
      resolve(parent, args) {
        return University.find({});
      }
    },
    ownership: {
      type: new GraphQLList(UniversityType),
      args: { ownership: { type: GraphQLString } },
      resolve(parent, args) {
        return University.find({ ownership: args.ownership });
      }
    }
  }
});

module.exports = RootQuery;
