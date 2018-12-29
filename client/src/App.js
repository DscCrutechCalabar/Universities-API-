import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Homepage from "./components/ViewBeta/HomePage.js";
import EndPoint from "./containers/EndPoint";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  //uri: "https://localhost:4000/graphql" development
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
              <Route path="/api" component={EndPoint} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
