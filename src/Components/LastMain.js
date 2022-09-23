import React, { Component } from "react";
import createContextState from "./ContextState";
import TableMapper from "./TableMapper";

export default class LastMain extends Component {
  render() {
    return (
      <>
        <createContextState.Consumer>
          {(data) => <TableMapper vals={data} />}
        </createContextState.Consumer>
      </>
    );
  }
}
