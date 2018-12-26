import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Homepage from "./components/ViewBeta/HomePage.js";
import EndPoint from "./containers/EndPoint";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/api" component={EndPoint} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
