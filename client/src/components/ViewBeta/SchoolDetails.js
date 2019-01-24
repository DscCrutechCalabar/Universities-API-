import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getUniversityQuery,
  removeUniversity,
  getUniversitiesQuery,
  updateUniversity
} from "../../queries/queries";
import Modal from "react-responsive-modal";

class SchoolDetails extends Component {
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

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  delete() {
    this.props.removeUniversity({
      refetchQueries: [{ query: getUniversitiesQuery }]
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.updateUniversity({
      variables: {
        name: this.state.name,
        acronym: this.state.acronym.toLocaleLowerCase(),
        ownership: this.state.ownership,
        location: this.state.location,
        address: this.state.address,
        schoolWebsite: this.state.schoolWebsite
      }
    });
  }

  displayModalDetails() {
    const { university } = this.props.getUniversityQuery;
    if (university) {
      return university.map(school => {
        const { open } = this.state;
        return (
          <div key={school.acronym}>
            <Modal open={open} onClose={this.onCloseModal} center>
              <form onSubmit={this.submitForm.bind(this)}>
                <h1>Add School</h1>
                <div className="field">
                  <label>School Name:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ name: e.target.value })}
                    defaultValue={school.name}
                  />
                </div>

                <div className="field">
                  <label>Acronym:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ acronym: e.target.value })}
                    defaultValue={school.acronym}
                  />
                </div>

                <div className="field">
                  <label>Ownership:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ ownership: e.target.value })}
                    defaultValue={school.ownership}
                  />
                </div>

                <div className="field">
                  <label>Location:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ location: e.target.value })}
                    defaultValue={school.location}
                  />
                </div>

                <div className="field">
                  <label>Address:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ address: e.target.value })}
                    defaultValue={school.address}
                  />
                </div>

                <div className="field">
                  <label>School Website:</label>
                  <input
                    type="text"
                    onChange={e =>
                      this.setState({ schoolWebsite: e.target.value })
                    }
                    defaultValue={school.schoolWebsite}
                  />
                </div>

                <button>+</button>
              </form>
            </Modal>
          </div>
        );
      });
    }
  }

  displaySchoolDetails() {
    const { university } = this.props.getUniversityQuery;
    if (university) {
      return university.map(school => {
        return (
          <div key={school.acronym}>
            {this.displayModalDetails()}
            <div>
              <button onClick={this.delete.bind(this)}>Delete</button>
              <button className="buttons" onClick={this.onOpenModal}>
                Update
              </button>
            </div>
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
          name: props.schoolId
        }
      };
    }
  }),
  graphql(removeUniversity, {
    name: "removeUniversity",
    options: props => {
      return {
        variables: {
          name: props.schoolId
        }
      };
    }
  }),
  graphql(getUniversitiesQuery, { name: "getUniversitiesQuery" }),
  graphql(updateUniversity, { name: "updateUniversity" })
)(SchoolDetails);
