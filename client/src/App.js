import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Homepage from "./components/ViewBeta/HomePage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql" //development
  uri: "https://universities-api.herokuapp.com/graphql" //production
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Homepage} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
