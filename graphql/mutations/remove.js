const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");
const { GraphQLString, GraphQLNonNull } = graphql;

const removeUniversity = {
  type: UniversityType,
  args: {
    acronym: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    const removed = University.findOneAndDelete({
      acronym: args.acronym
    }).exec();
    if (!removed) {
      throw new Error("Error");
    }
    return removed;
  }
};

module.exports = removeUniversity;
