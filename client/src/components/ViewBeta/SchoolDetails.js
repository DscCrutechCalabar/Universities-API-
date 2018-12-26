import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUniversityQuery } from "../../queries/queries";

class SchoolDetails extends Component {
  displaySchoolDetails() {
    const { university } = this.props.data;
    if (university) {
      return university.map(school => {
        return (
          <div key={school.acronym}>
            <h2>{school.name}</h2>
            <h3>{school.acronym}</h3>
            <p>{school.ownership}</p>
            <p>{school.schoolWebsite}</p>
            <p>{school.location}</p>
            <p>{school.address}</p>
          </div>
        );
      });
    } else {
      return <div>No School Selected...</div>;
    }
  }
  render() {
    return <div id="school-details">{this.displaySchoolDetails()}</div>;
  }
}

export default graphql(getUniversityQuery, {
  options: props => {
    return {
      variables: {
        acronym: props.schoolId
      }
    };
  }
})(SchoolDetails);
