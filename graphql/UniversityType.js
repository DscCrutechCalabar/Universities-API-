const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UniversityType = new GraphQLObjectType({
  name: "University",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    location: { type: GraphQLString }
  })
});

module.exports = UniversityType;
