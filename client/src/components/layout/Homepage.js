import React, { Component } from "react";
import "./HomePage.css";

// const mainPageStyle = {
//   color: "black"
// };

// const divStyle = {
//   backgroundImage: 'url("../../img/students.jpg")',
//   textAlign: "center",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   height: "100vh",
//   backgroundAttachment: "fixed"
// };

// const badge = {
//   margin: "10px",
//   fontSize: "50px"
// };

// const imgStyle = {
//   width: "1500px",
//   marginLeft: "50px"
// };

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      imgURL: "../../img/students.jpg"
    };
  }

  render() {
    return (
      <div className="home">
        <h1 className="badge badge-danger">Homepage</h1>
        <div className="mainPage">
          <p className="CopyRight">
            Copyright &copy; 2019 by Tony Fung, Marin Marinov, Angela Lim, Mary
            Fan{" "}
          </p>
        </div>{" "}
        />
      </div>
    );
  }
}

export default Homepage;
