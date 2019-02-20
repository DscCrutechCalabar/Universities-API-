const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");
const { GraphQLString, GraphQLNonNull } = graphql;

const removeUniversity = {
  type: UniversityType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    const removed = University.findOneAndDelete({
      name: args.name
    }).exec();
    if (!removed) {
      throw new Error("Error");
    }
    return removed;
  }
};

module.exports = removeUniversity;
