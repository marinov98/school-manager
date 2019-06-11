import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SingleCampus.css";
import AllStudents from "../students/AllStudentsContainer";
class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: "Hunter College",
      address: "695 Park Ave, New York, NY 10065",
      description: "Hunter College is one of the constituent colleges of the City University of New York, an American public university.",
      imageURL: "../../img/hunter-college.jpg",
      isEditOn: true,

      tempAddress: "",
      tempName:"",
      tempDescription: "",
      tempUrl: ""
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      isEditOn: !prevState.isEditOn,
      tempName: this.state.campus,
      tempAddress: this.state.address,
      tempUrl: this.state.imageURL,
      tempDescription: this.state.description

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
      campus: this.state.tempName,
      address: this.state.tempAddress,
      imageURL: this.state.tempUrl,
      description: this.state.tempDescription
    }));
    event.preventDefault();
  };

  render() {
    if (this.state.isEditOn) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}> Single Campus </h1>
          <h2 style={{ textAlign: "center" }}> {this.state.campus} </h2>
          <p className="description">{this.state.description}</p>
          <img
            src={require("../../img/hunter-college.jpg")}
            style={{ height: "250px", width: "250px" }}
          />
          <div className="first">{this.state.address}</div>
          <div className="wrapper">
            <button className="edit" onClick={this.handleClick}>
              Edit
            </button>
            <button className="delete" onClick={this.handleClick}>
              Delete
            </button>
          </div>
          <AllStudents />
        </div>
      );
    } else {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Campus Name:
                <input
                  name="tempName"
                  type="text"
                  value={this.state.tempName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Campus Address:
                <input
                  name="tempAddress"
                  type="text"
                  value={this.state.tempAddress}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Campus Image Link:
                <input
                  name="tempUrl"
                  type="text"
                  value={this.state.tempUrl}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Campus description:
                <input
                  name="tempDescription"
                  type="text"
                  value={this.state.tempDescription}
                  onChange={this.handleChange}
                />
              </label>
              <br />

              <input type="submit" value="Save" />
              <button onClick={this.handleClick}>Cancel</button>
            </form>
            <AllStudents />
        </div>
      );
    }
  }
}

export default SingleCampus;
