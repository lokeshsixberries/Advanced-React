import React, { Component } from "react";
import HigherOrderComponent from "./HigherOrderComponent";
import Counter from "./Counter";
export default class Main extends Component {
  render() {
    return (
      <>
        <HigherOrderComponent Component={Counter} />
      </>
    );
  }
}
