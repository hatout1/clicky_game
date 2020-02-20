import React, { Component } from "react";

import "./App.css";
import Nav from "./components/navbar/Nav";
import GameBody from "./components/GameBody/GameBody";
import GameTitle from "./components/title/GameTitle";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0
    };
  }

  updateScore = newScore => {
    this.setState({ score: newScore });
  };

  render() {
    return (
      <div>
        <Nav Score={this.state.score} TopScore={this.state.topScore} />
        <GameTitle />
        <GameBody updateScore={this.updateScore} />
      </div>
    );
  }
}

export default App;
