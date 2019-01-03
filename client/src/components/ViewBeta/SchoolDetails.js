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
            <div>
              <h3 style={{ display: "contents" }}>Name : </h3>{" "}
              <p style={{ display: "contents" }}>{school.name}</p>
            </div>
            <div>
              <h3 style={{ display: "contents" }}>Acronym : </h3>{" "}
              <p style={{ display: "contents" }}>{school.acronym}</p>
            </div>
            <div>
              <h3 style={{ display: "contents" }}>Ownership : </h3>{" "}
              <p style={{ display: "contents" }}>{school.ownership}</p>
            </div>
            <div>
              <h3 style={{ display: "contents" }}>School Website : </h3>{" "}
              <p style={{ display: "contents" }}>{school.schoolWebsite}</p>
            </div>
            <div>
              <h3 style={{ display: "contents" }}>Location : </h3>{" "}
              <p style={{ display: "contents" }}>{school.location}</p>
            </div>
            <div>
              <h3 style={{ display: "contents" }}>Address : </h3>{" "}
              <p style={{ display: "contents" }}>{school.address}</p>
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
