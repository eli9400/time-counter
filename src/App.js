import "./App.css";
import React, { Component } from "react";
import Counter from "./comps/counter";

class App extends Component {
  state = { mayDate: "2023-06-07" };
  userInput = React.createRef();
  changeDate = () => {
    this.setState({ mayDate: this.userInput.current.value });
  };
  render() {
    return (
      <div className="App">
        <Counter appDate={this.state.mayDate} />

        {/*   <input ref={this.userInput} type="date" defaultValue="2025-01-01" />

        <button onClick={this.changeDate} className="btn btn-success">
          change
        </button> */}
      </div>
    );
  }
}

export default App;
