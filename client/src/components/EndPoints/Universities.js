import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUniversitiesQuery } from "../../queries/queries";

class Universities extends Component {
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
      return (
        <div>
          <pre>{JSON.stringify(data.universities, null, 2)}</pre>
        </div>
      );
    }
  }

  render() {
    return <div>{this.displaySchools()}</div>;
  }
}

export default graphql(getUniversitiesQuery)(Universities);
