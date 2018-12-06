const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UniversityType = new GraphQLObjectType({
  name: "University",
  fields: () => ({
    id: { type: GraphQLID },
    acronym: { type: GraphQLString },
    address: { type: GraphQLString },
    schoolWebsite: { type: GraphQLString },
    name: { type: GraphQLString },
    ownership: { type: GraphQLString },
    location: { type: GraphQLString }
  })
});

module.exports = UniversityType;
