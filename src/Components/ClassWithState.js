const { Component } = require("react");

class ClassWithState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lokesh",
    };
  }
  render() {
    const { name } = this.state;
    return (
      <>
        <h1>{`WelCome Mr. ${name}`}</h1>
      </>
    );
  }
}

export default ClassWithState;
