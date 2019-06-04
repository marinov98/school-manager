import React, { Component } from "react";

const mainPageStyle = {
  color: "black"
};

const divStyl = {
  backgroundImage: 'url("../../img/students.jpg")',
  textAlign: "center"
};

const badge = {
  margin: "10px",
  fontSize: "50px"
};

const imgStyle = {
  width: "1500px",
  marginLeft: "50px"
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
      <div style={divStyl}>
        <h1 style={badge} className="badge badge-primary">
          Homepage
        </h1>
        <div style={mainPageStyle} className="mainPage">
          <img
            style={imgStyle}
            src={require("../../img/students.jpg")}
            alt="students"
          />
        </div>
      </div>
    );
  }
}

export default Homepage;
