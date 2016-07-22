import React, { Component } from "react";
import { Router, browserHistory } from "react-router";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={this.props.routes} />
    );
  }
};

export default App;
