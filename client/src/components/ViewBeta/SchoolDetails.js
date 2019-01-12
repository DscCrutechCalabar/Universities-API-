import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getUniversityQuery,
  removeUniversity,
  getUniversitiesQuery
} from "../../queries/queries";

class SchoolDetails extends Component {
  delete() {
    this.props.removeUniversity({
      refetchQueries: [{ query: getUniversitiesQuery, getUniversityQuery }]
    });
  }

  displaySchoolDetails() {
    const { university } = this.props.getUniversityQuery;
    if (university) {
      return university.map(school => {
        return (
          <div key={school.acronym}>
            <button onClick={this.delete.bind(this)}>Delete</button>
            <button>Update</button>
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
    } else if (!university) {
      return <div>No School Selected...</div>;
    }
  }
  render() {
    return <div id="school-details">{this.displaySchoolDetails()}</div>;
  }
}

export default compose(
  graphql(getUniversityQuery, {
    name: "getUniversityQuery",
    options: props => {
      return {
        variables: {
          acronym: props.schoolId
        }
      };
    }
  }),
  graphql(removeUniversity, {
    name: "removeUniversity",
    options: props => {
      return {
        variables: {
          acronym: props.schoolId
        }
      };
    }
  }),
  graphql(getUniversitiesQuery, { name: "getUniversitiesQuery" })
)(SchoolDetails);
