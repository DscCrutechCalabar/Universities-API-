import { gql } from "apollo-boost";

const getUniversitiesQuery = gql`
  {
    universities {
      id
      name
      acronym
      ownership
      location
      address
      schoolWebsite
    }
  }
`;

const addUniversityMutation = gql`
  mutation addUniversityMutation(
    $name: String!
    $acronym: String!
    $ownership: String!
    $location: String!
    $address: String!
    $schoolWebsite: String!
  ) {
    addUniversity(
      name: $name
      acronym: $acronym
      ownership: $ownership
      location: $location
      address: $address
      schoolWebsite: $schoolWebsite
    ) {
      name
      acronym
    }
  }
`;

const removeUniversity = gql`
  mutation removeUniversity($name: String!) {
    removeUniversity(name: $name) {
      name
      acronym
    }
  }
`;

const updateUniversity = gql`
  mutation updateUniversity(
    $name: String!
    $acronym: String!
    $ownership: String!
    $location: String!
    $address: String!
    $schoolWebsite: String!
  ) {
    updateUniversity(
      name: $name
      acronym: $acronym
      ownership: $ownership
      location: $location
      address: $address
      schoolWebsite: $schoolWebsite
    ) {
      name
      acronym
    }
  }
`;

const getUniversityQuery = gql`
  query($name: String) {
    university(name: $name) {
      name
      acronym
      ownership
      location
      address
      schoolWebsite
    }
  }
`;

export {
  getUniversitiesQuery,
  addUniversityMutation,
  getUniversityQuery,
  removeUniversity,
  updateUniversity
};
