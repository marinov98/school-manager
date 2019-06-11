import React, { Component } from "react";
import "./SingleCampus.css";
import AllStudents from "../students/AllStudentsContainer";
class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: [
        {
          campus: "Hunter College",
          imageURL: "../../img/hunter-college.jpg"
        }
      ],
      isEditOn: true,
      address: "695 Park Ave, New York, NY 10065",
      tempAddress: ""
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      isEditOn: !prevState.isEditOn,
      tempAddress: this.state.address
    }));
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    this.setState(prevState => ({
      isEditOn: !prevState.isEditOn,
      address: this.state.tempAddress
    }));
    event.preventDefault();
  };

  render() {
    if (this.state.isEditOn) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}> Single Campus </h1>
          <h2 style={{ textAlign: "center" }}> Hunter College </h2>
          <p className="description">
            Hunter College is one of the constituent colleges of the City
            University of New York, an American public university. It is located
            in the Lenox Hill neighborhood of the Upper East Side of Manhattan,
            New York City.
          </p>
          <img
            src={require("../../img/hunter-college.jpg")}
            style={{ height: "250px", width: "250px" }}
          />
          <div className="first">{this.state.address}</div>
          <div className="wrapper">
            <button className="edit" onClick={this.handleClick}>
              Edit
            </button>
          </div>
          <AllStudents />
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input
              name="tempAddress"
              type="text"
              value={this.state.tempAddress}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Save" />
          <button onClick={this.handleClick}>Cancel</button>
        </form>
      );
    }
  }
}

export default SingleCampus;
