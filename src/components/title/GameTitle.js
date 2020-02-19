import React from "react";

const GameTitle = props => (
  <div className="jumbotron mt-5 jumbotron-fluid text-light bg-dark">
    <div className="container">
      <h1>Clicky Game</h1>
      <br />
      <h5 className="subtitle">
        Click on an image to earn points, but don't click on any more than once!{" "}
        <br /> The goal is to select each picture only once
      </h5>
    </div>
  </div>
);

export default GameTitle;
