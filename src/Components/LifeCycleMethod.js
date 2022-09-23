import React, { Component } from "react";

export default class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Upend Component",
    };
  }

  componentWillMount() {
    console.log("component will mount");
    //call before the run render method
  }

  componentWillUnmount() {
    console.log("component will unmount");
    //call when the any document deatach from the dom
  }

  componentDidMount() {
    console.log("component Did mount ");
    //call when the function component render for once
  }

  shouldComponentUpdate() {
    console.log("when pro value change then the function will run");
  }

  componentWillReceiveProps() {
    console.log("when the any prop value is chnage that time it call");
  }

  render() {
    console.log("in render");
    return (
      <>
        <h1>Lokesh sharma</h1>
      </>
    );
  }
}
