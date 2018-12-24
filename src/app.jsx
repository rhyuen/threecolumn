import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    data: "DATAISHERE"
  };

  render() {
    const Test = () => (
      <div>
        If you can see this text, the shallow rendering for Enzyme is NOT
        WORKING.
      </div>
    );

    return (
      <div className="root">
        <p>hi netlify</p>
        <p>STATE: {this.state.data}</p>
        <Test />
      </div>
    );
  }
}

export default hot(module)(App);
