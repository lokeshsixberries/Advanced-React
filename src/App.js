// import BasicClass from "./Components/BasicClass";
// import ClassWithState from "./Components/ClassWithState";
// import SetStateClass from "./Components/SetStateClass";
// import ApiDataHandle from "./Components/ApiDataHandle";
// import CreateRefWIthClass from "./Components/CreateRefWIthClass";
// import LifeCycleMethod from "./Components/LifeCycleMethod";
// import CycleComponentDidMount from "./Components/CycleComponentDidMount";
import CycleComponentUpdate from "./Components/CycleComponentUpdate";


const { Component } = require("react");
class App extends Component {
  render() {
    return (
      <>
        <CycleComponentUpdate />
      </>
    );
  }
}

export default App;
