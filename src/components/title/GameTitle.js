import React from "react";

function GameTitle() {
  return (
    <div>
      <h1>Clicky Game</h1>
      <br />
      <h5 className="subtitle">
        Click a picture to get started! After each click, the pictures will
        shuffle. <br /> The goal is to select each picture only once
      </h5>
    </div>
  );
}

export default GameTitle;
