import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count++
        </button>
        <h1>{`Count : ${count}`}</h1>
      </>
    );
  }
}
