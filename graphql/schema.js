const graphql = require("graphql");
const UniversityType = require("./UniversityType");
const University = require("../models/University");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUniversity: {
      type: UniversityType,
      args: {
        acronym: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString },
        schoolWebsite: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        ownership: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let university = new University({
          acronym: args.acronym,
          address: args.address,
          schoolWebsite: args.schoolWebsite,
          name: args.name,
          ownership: args.ownership,
          location: args.location
        });
        return university.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
