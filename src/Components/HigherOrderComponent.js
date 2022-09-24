import React, { Component } from "react";

export default class HigherOrderComponent extends Component {
  render() {
    const { Component } = this.props;
    return (
      <>
        <Component />
      </>
    );
  }
}
