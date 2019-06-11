import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AllStudents.css";
import { Link } from "react-router-dom";

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      gpa: this.props.gpa,
      id: this.props.id,
      registered: this.props.registered,
      campus: this.props.campus,
      tempcampus: "",
      pictureURL: this.props.pictureURL
    };
  }

  isRegistered = () => {
    if (this.props.registered) {
      return (
        <h3 className="registered">The student is registered to a campus</h3>
      );
    } else {
      return (
        <h4 className="registered">
          The student is not registered to a campus
        </h4>
      );
    }
  };

  handleClick = e => {
    if (this.state.campus !== "") {
      this.setState(state => ({
        campus: state.tempcampus
      }));
    }
  };

  handleChange = e => {
    this.setState({
      tempcampus: e.target.value
    });
  };

  // DISPLAY FUNCTIONS

  studentPageTop = () => {
    return (
      <div className="row pageTop">
        <div className="col-sm-4">
          <img
            src={require("../../img/david-cohen.jpg")}
            alt="a student"
            className="studentphoto"
          />
        </div>
        <button className="badge badge-primary btn edit">Edit</button>
        <button className="badge badge-danger btn delete">Delete</button>
      </div>
    );
  };

  studentPageBottom = () => {
    return (
      <div className="row pageBottom">
        <div className="row campusBox">
          <div className="col-sm-4">
            {this.isRegistered()}
            <img
              className="campusPhoto"
              src={require("../../img/hunter-college.jpg")}
              alt="Campus"
            />
          </div>
          <div className="col-md-8">
            <Link to="/allCampuses" className="campusName">
              {this.state.campus}
            </Link>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="select-campus">
            <select
              ref="select"
              defaultValue={this.state.campus}
              onChange={this.handleChange}
              className="selector"
            >
              <option value={this.state.campus} disabled>
                Select campus...
              </option>
              <option value="Fung Univerity">Fung University</option>
              <option value="FAN Mary College">FAN Mary College</option>
              <option value="Lim Community College">
                Lim Community College
              </option>
              <option value="Marinov State University">
                Marinov State University
              </option>
            </select>
          </div>
          <button
            className="badge badge-warning btn-changeCampus"
            onClick={this.handleClick}
          >
            Change Campus
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="student">
        <div className="row">
          <div className="col-sm-4">
            <h1 className="studentname">{this.props.name}</h1>
          </div>
          <div className="col-sm-4">
            <h4 className="studentGPA">GPA: {this.props.gpa}</h4>{" "}
          </div>
        </div>
        {this.studentPageTop()}
        {this.studentPageBottom()}
      </div>
    );
  }
}

SingleStudent.propTypes = {
  name: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  registered: PropTypes.bool.isRequired,
  campus: PropTypes.string,
  pictureURL: PropTypes.string,
  id: PropTypes.number.isRequired
};
