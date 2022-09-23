import React, { Component } from "react";

export default class CycleComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: "",
      show: false,
    };
  }

  async componentDidUpdate() {
    const { show } = this.state;
    const data = await fetch("https://catfact.ninja/fact/");
    const json = await data.json();
    if (show) {
      this.setState({
        apiData: json.fact,
      });
    }
  }

  render() {
    const { apiData, show } = this.state;
    return (
      <>
        <h2 style={{ backgroundColor: "yellow" }}>{apiData}</h2>
        <button
          onClick={() => this.setState({ show: !show })}
          style={{ position: "absolute", top: "200px" }}
        >
          {!show ? "Start" : "Stop"}
        </button>
      </>
    );
  }
}
