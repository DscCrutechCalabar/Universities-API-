import React, { Component } from "react";
import {
  addUniversityMutation,
  getUniversitiesQuery
} from "../../queries/queries";
import { graphql } from "react-apollo";

class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      acronym: "",
      ownership: "",
      location: "",
      address: "",
      schoolWebsite: ""
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        acronym: this.state.acronym,
        ownership: this.state.ownership,
        location: this.state.location,
        address: this.state.address,
        schoolWebsite: this.state.schoolWebsite
      },
      refetchQueries: [{ query: getUniversitiesQuery }]
    });
  }

  render() {
    return (
      <form id="add-school" onSubmit={this.submitForm.bind(this)}>
        <h1>Add School</h1>
        <div className="field">
          <label>School Name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Acronym:</label>
          <input
            type="text"
            onChange={e => this.setState({ acronym: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Ownership:</label>
          <input
            type="text"
            onChange={e => this.setState({ ownership: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Location:</label>
          <input
            type="text"
            onChange={e => this.setState({ location: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Address:</label>
          <input
            type="text"
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>

        <div className="field">
          <label>School Website:</label>
          <input
            type="text"
            onChange={e => this.setState({ schoolWebsite: e.target.value })}
          />
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(addUniversityMutation)(AddSchool);
