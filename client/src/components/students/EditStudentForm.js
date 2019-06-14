import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { editStudentThunk } from "../../actions/studentActions";
import { connect } from "react-redux";

export default class EditStudentForm extends Component {
  constructor(props) {
    super(props);
    // initial values should be that of the student properties
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      gpa: this.props.gpa,
      imageURL: this.props.imageURL
    };
  }

  // EVENT HANDLERS

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    // this is only if the user deletes the initial properties and leaves fields blank
    // Its okay if save changes is clicked and nothing actually changed
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.gpa < 0 ||
      this.state.imageURL === ""
    ) {
      alert("One or more fields are invalid");
    } else {
      let currStudent = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gpa: this.state.gpa,
        imageURL: this.state.imageURL
      };

      this.props.editStudent(currStudent);
    }
  };

  render() {
    return (
      <div>
        <h1>Edit Student</h1>
        <form className="studentEditForm">
          <label> First Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <label>GPA: </label>
          <input
            type="text"
            name="gpa"
            value={this.state.gpa}
            placeholder="0"
            onChange={this.handleChange}
          />
          <br />
          <label>Student URL</label>
          <input
            type="text"
            name="imageURL"
            value={this.state.imageURL}
            placeholder="picture URL"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Save Changes"
          />
          <br />
          <Link to="/singleStudent">Go Back</Link>
        </form>
      </div>
    );
  }
}

// EditStudentForm.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   gpa: PropTypes.number.isRequired,
//   imageURL: PropTypes.string.isRequired
// };

const mapStatetoProps = state => ({
  student: state.student
});

const mapDispathToProps = dispatch => {
  return {
    editStudent: currStudent => dispatch(editStudentThunk(currStudent))
  };
};

// UNCOMMENT WHEN REDUX SET UP
// export default connect(
//     mapDispathToProps,
//     mapDispathToProps
// )(EditStudentForm);
