import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AllStudents.css";
import { Link } from "react-router-dom";
import EditStudentForm from "./EditStudentForm";
import { connect } from "react-redux";

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {}
    };
  }

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    console.log(params.studentId); // For example, if I grab student whose id is 62, from localhost:3000/students/62, then params.studentId will return 62. Look at App.js to see the route (/students/:studentId).
  };

  isRegistered = () => {
    if (this.state.campus !== "") {
      return (
        <div className="col-sm-4">
          <h3 className="registered">The student is registered to a campus</h3>
          <img
            className="campusPhoto"
            src={require("../../img/hunter-college.jpg")}
            alt="Campus"
          />
        </div>
      );
    } else {
      return (
        <div className="col-sm-4">
          <h4 className="registered">
            The student is not registered to a campus
          </h4>
        </div>
      );
    }
  };

  componentWillReceiveProps = () => {
    console.log(this.props.match.props);
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

  handleEdit = e => {
    if (this.state.campus === "") {
      e.preventDefault();
      alert("student not registered to a campus");
    }
  };

  // DISPLAY FUNCTIONS

  studentPageTop = () => {
    // NOTE: img below should be changed to this.state.imageURL
    // when connection to redux store has been made
    return (
      <div className="row pageTop">
        <div className="col-sm-4">
          <img
            src={require("../../img/david-cohen.jpg")}
            alt="a student"
            className="studentphoto"
          />
        </div>
        <Link
          onClick={this.handleEdit}
          to="/studentForm"
          className="badge badge-primary btn edit"
        >
          Edit
        </Link>
        <button className="badge badge-danger btn delete">Delete</button>
      </div>
    );
  };

  studentPageBottom = () => {
    return (
      <div className="row pageBottom">
        <div className="row campusBox">
          {this.isRegistered()}
          <div className="col-md-8">
            <Link to="/allCampuses" className="campusName">
              {this.state.student.campus}
            </Link>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="select-campus">
            <select
              ref="select"
              value="Select"
              onChange={this.handleChange}
              className="selector"
            >
              <option value="Select" disabled>
                Select campus...
              </option>
              <option value="Hunter College">Hunter College</option>
              <option value="Queens College">Queen College</option>
              <option value="Brooklyn College">Brooklyn College</option>
              <option value="Baruch College">Baruch College</option>
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
            <h1 className="studentname">
              {this.state.student.firstName}
              <br />
              {this.state.student.lastName}
            </h1>
          </div>
          <div className="col-sm-4">
            <h4 className="studentGPA">GPA: {this.state.student.gpa}</h4>{" "}
          </div>
        </div>
        {this.studentPageTop()}
        {this.studentPageBottom()}
      </div>
    );
  }
}

// SingleStudent.propTypes = {
//   name: PropTypes.string.isRequired,
//   gpa: PropTypes.number.isRequired,
//   registered: PropTypes.bool.isRequired,
//   campus: PropTypes.string,
//   pictureURL: PropTypes.string,
//   id: PropTypes.number.isRequired
// };

// UNCOMMENT THIS WHEN ACTIONS AND THUNKS ARE READY

const mapStateToProps = state => ({
  student: state.student
});

// const mapDispatchToProps = dispatch => {
//   return {
//     getStudent: () => dispatch(getStudentThunk())
//   };
// };

// CONNECT TO REDUX STORE
// export default connect(mapStateToProps)(SingleStudent);
