import React, { Component } from "react";
import "./HomePage.css";
import SingleStudent from "../students/SingleStudent";

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
