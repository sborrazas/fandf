import React, { Component } from "react";
import { Router, hashHistory } from "react-router";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={this.props.routes} />
    );
  }
};

export default App;
