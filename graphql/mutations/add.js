const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");
const { GraphQLString, GraphQLNonNull } = graphql;

const addUniversity = {
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
    let university = new University({
      acronym: args.acronym,
      address: args.address,
      schoolWebsite: args.schoolWebsite,
      name: args.name,
      ownership: args.ownership,
      location: args.location
    });
    const newSchool = university.save();
    if (!newSchool) {
      throw new Error("Error");
    }
    return newSchool;
  }
};

module.exports = addUniversity;
