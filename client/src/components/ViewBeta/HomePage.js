import React, { Component } from "react";
import UniversityList from "./UniversityList";
import AddSchool from "./AddSchool";

class Homepage extends Component {
  render() {
    return (
      <div id="main">
        <h1>Populate The Database</h1>
        <UniversityList />
        <AddSchool />
      </div>
    );
  }
}

export default Homepage;
