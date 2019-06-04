import React, { Component } from "react";

const mainPageStyle = {
  textAlign: "center",
  color: "black",
  height: "100px"
};

const headerStyle = {
  margin: "10px",
  textAlign: "center",
  background: "lightblue",
  fontSize: "30px"
};

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      imgURL: "../../img/students.jpg"
    };
  }

  render() {
    return (
      <div>
        <div style={mainPageStyle} className="mainPage">
          <h1 style={headerStyle} className="badge badge-primary">
            Homepage
          </h1>
          <img src={require("../../img/students.jpg")} alt="students" />
        </div>
      </div>
    );
  }
}

export default Homepage;
