import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUniversitiesQuery } from "../../queries/queries";
import SchoolDetails from "./SchoolDetails";

class UniversityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displaySchools() {
    const data = this.props.data;
    if (data.loading) {
      return <div>loading schools</div>;
    } else {
      return data.universities.map(school => {
        return (
          <li
            key={school.id}
            onClick={e => {
              this.setState({ selected: school.name });
            }}
          >
            {" "}
            {school.acronym}{" "}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="university-list">{this.displaySchools()}</ul>
        <SchoolDetails schoolId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getUniversitiesQuery)(UniversityList);
