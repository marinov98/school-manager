import React, { Component } from "react";
import Navbar from "./Navbar";

class Homepage extends Component {
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
