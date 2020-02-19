import React from "react";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light text-white fixed-top bg-warning">
    <a className="nav-link text-white" href="/">
      <h1>Clicky Game</h1>
    </a>

    <h1 className="ml-auto mt-2"> Click an image to begin! </h1>

    <h2 className="ml-auto mt-2" id="counters">
      Score: 0 | Top Score: 0
    </h2>
  </nav>
);

export default Nav;
