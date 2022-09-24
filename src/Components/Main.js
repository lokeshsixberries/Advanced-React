import React, { createRef, Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    const stateRef = createRef();
    const handleClick = () => {
      this.setState({
        name: stateRef.current.value,
      });
    };
    const { name } = this.state;
    return (
      <>
        <input name="name" placeholder="Enter Name" ref={stateRef} />
        <h4>{`Hyy, ${name}`}</h4>
        <button onClick={() => handleClick()}>Submit</button>
      </>
    );
  }
}
