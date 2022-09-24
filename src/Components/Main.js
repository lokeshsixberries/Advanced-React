import React, { Component } from "react";
import Heading from "./Heading";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lokesh Sharma",
    };
  }
  render() {
    const { name } = this.state;
    return (
      <>
        <Heading heading={name} />
      </>
    );
  }
}
