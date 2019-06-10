import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      gpa: this.props.gpa,
      id: this.props.id,
      registered: this.props.registered,
      campus: "",
      pictureURL: this.props.pictureURL
    };
  }

  isRegistered = () => {
    if (this.props.registered) {
      return <h3>The student is registered to a campus</h3>;
    } else {
      return <h3>The student is not registered to a campus</h3>;
    }
  };

  // DISPLAY FUNCTIONS

  studentPageTop = () => {
    return (
      <div className="row">
        <div className="col">
          <img src={require("../../img/david-cohen.jpg")} alt="a student" />
        </div>
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
      </div>
    );
  };

  studentPageBottom = () => {
    return (
      <div className="row">
        <div className="col">
          {this.isRegistered()}
          <img src={require("../../img/hunter-college.jpg")} alt="Campus" />
        </div>
        <div className="select-campus">
          <select className="selector">
            <option value="" disabled selected>
              Select campus...
            </option>
            <option value="1">Fung University</option>
            <option vlaue="2">FAN Mary College</option>
            <option value="3">Lim Community College</option>
            <option value="4">Marinov state university</option>
          </select>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="student">
        <h1>{this.props.name}</h1>
        <h4>GPA: {this.props.gpa}</h4>
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
