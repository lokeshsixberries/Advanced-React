import React, { Component } from "react";

export default class SetStateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      show: false,
    };
  }

  render() {
    this.handleInputChange = (name) => {
      this.setState({
        name: name,
        show: false,
      });
    };

    const { name, show } = this.state;
    return (
      <>
        <div style={{ margin: "100px" }}>
          <input
            type="name"
            value={name}
            onChange={(e) => this.handleInputChange(e.target.value)}
            placeholder="text"
          />
          <br /><br />
          <button onClick={() => this.setState({ show: true })}>Submit</button>
          <>{show && <p>{`Write Here : ${name}`}</p>}</>
        </div>
      </>
    );
  }
}
