import React, { Component } from "react";
import createContextState from "./ContextState";
import LastMain from "./LastMain";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: {},
    };
  }

  handleClick = async () => {
    const data = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const json = await data.json();
    this.setState({
      stateData: json,
    });
  };

  render() {
    const { stateData } = this.state;
    return (
      <>
        <createContextState.Provider value={stateData}>
          <LastMain />
        </createContextState.Provider>
        <button onClick={() => this.handleClick()}>Submit</button>
      </>
    );
  }
}
