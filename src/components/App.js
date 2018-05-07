import React, { Component } from "react";
import boards from "../boards.js";
import BoardList from "./BoardList.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { boards: boards };
  }

  render() {
    return <BoardList boards={this.state.boards} />;
  }
}

export default App;
