import React, { Component } from "react";

const mainPageStyle = {
  color: "black"
};

const divStyle = {
  backgroundImage: 'url("../../img/students.jpg")',
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  backgroundAttachment: "fixed"
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
      <div style={divStyle}>
        <h1 style={badge} className="badge badge-primary">
          Homepage
        </h1>
        <div style={divStyle} className="mainPage">
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
