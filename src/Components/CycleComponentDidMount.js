import React, { Component } from "react";

export default class CycleComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lokesh",
    };
  }

  //the component did mount will call after the render attact with the dom.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "veera",
      });
    }, 2000);
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <h1>{`Name : ${name}`}</h1>
      </>
    );
  }
}
