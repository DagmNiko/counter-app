import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <Fragment>
        <span>{changeType()}</span>
        <button>Increment</button>
      </Fragment>
    );
    const changeType = () => {
      this.count.state === 0 ? <h1>Zero</h1> : this.count.state;
    }
  }
}

export default Counter;
