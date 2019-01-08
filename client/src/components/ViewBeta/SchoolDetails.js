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
            <div className="details">
              <h3>Name : </h3> <p>{school.name}</p>
            </div>
            <div className="details">
              <h3>Acronym : </h3> <p>{school.acronym}</p>
            </div>
            <div className="details">
              <h3>Ownership : </h3> <p>{school.ownership}</p>
            </div>
            <div className="details">
              <h3>School Website : </h3> <p>{school.schoolWebsite}</p>
            </div>
            <div className="details">
              <h3>Location : </h3> <p>{school.location}</p>
            </div>
            <div className="details">
              <h3>Address : </h3> <p>{school.address}</p>
            </div>
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
