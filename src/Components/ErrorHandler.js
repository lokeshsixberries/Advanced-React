import React, { Component } from "react";

export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error", error);
  }
  render() {
    const { count } = this.state;
    if (count > 5) {
      if (count === 5) {
        throw new Error("App Crashed !!!!");
      }
      return <h1>App Crashed</h1>;
    }

    return (
      <>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count++
        </button>
        <h1>{`count : ${count}`}</h1>
      </>
    );
  }
}
