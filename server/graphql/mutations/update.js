const graphql = require("graphql");
const UniversityType = require("../types/UniversityType");
const University = require("../../models/University");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;
