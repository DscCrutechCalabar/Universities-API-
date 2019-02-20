const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UniversityType = new GraphQLObjectType({
  name: "University",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    acronym: { type: GraphQLString },
    ownership: { type: GraphQLString },
    address: { type: GraphQLString },
    location: { type: GraphQLString },
    schoolWebsite: { type: GraphQLString }
  })
});

module.exports = UniversityType;
