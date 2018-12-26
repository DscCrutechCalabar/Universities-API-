import React, { Component } from "react";

import Routes from "../components/EndPoints";

class App extends Component {
  render() {
    const {
      location: { pathname },
      match: { path }
    } = this.props;
    return (
      <div>
        <Routes path={path} />
      </div>
    );
  }
}

export default App;
