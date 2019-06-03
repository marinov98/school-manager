import React, { Component } from "react";

import PropTypes from "prop-types";
import Navbar from "./Navbar";

class Homepage extends Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="mainPage">
          <h1>School Manager</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
