import React, { Component, createRef } from "react";

export default class CreateRefWIthClass extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      name: "",
    };
  }

  handleClick = () => {
    this.setState({
      name: this.ref.current.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <input type="text" name="name" ref={this.ref} />
        <button onClick={() => this.handleClick()}>Submit</button>
        {name !== "" && <h1>{`Hello Mr. ${name}`}</h1>}
      </>
    );
  }
}
