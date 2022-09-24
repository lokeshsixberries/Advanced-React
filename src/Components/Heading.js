import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Heading extends Component {
  render() {
    const { heading } = this.props;
    return (
      <>
        <h1>{`Hyy , ${heading}`}</h1>
      </>
    );
  }
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
