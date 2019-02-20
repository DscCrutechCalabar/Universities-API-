import React, { Component } from "react";
import UniversityList from "./UniversityList";
import AddSchool from "./AddSchool";

class Homepage extends Component {
  render() {
    return (
      <div id="main">
        <UniversityList />
        <AddSchool />
      </div>
    );
  }
}

export default Homepage;
