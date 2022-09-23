import React, { Component } from "react";

export default class CycleComponentWillMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: "",
    };
  }

  async componentWillMount() {
    const data = await fetch("https://catfact.ninja/fact/");
    const json = await data.json();
    this.setState({
      apiData: json.fact,
    });
  }

  render() {
    const { apiData } = this.state;
    return (
      <>
        <h4>{apiData}</h4>
      </>
    );
  }
}
