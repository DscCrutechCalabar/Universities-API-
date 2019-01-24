const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");
const { GraphQLString, GraphQLNonNull } = graphql;

const updateUniversity = {
  type: UniversityType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    acronym: { type: new GraphQLNonNull(GraphQLString) },
    ownership: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLString },
    schoolWebsite: { type: GraphQLString }
  },
  resolve(parent, args) {
    return University.findOneAndUpdate(
      { acronym: args.acronym },
      {
        $set: {
          name: args.name,
          acronym: args.acronym,
          ownership: args.ownership,
          location: args.location,
          address: args.address,
          schoolWebsite: args.schoolWebsite
        }
      },
      { new: true }
    ).catch(err => new Error(err));
  }
};

module.exports = updateUniversity;
