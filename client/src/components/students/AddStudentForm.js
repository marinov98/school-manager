import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addStudentThunk } from "../../actions/studentActions";
import {
  Form,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./AllStudents.css";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      campus: "Select Campus",
      dropdownOpen: false
    };
    this.initialState = this.state;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.firstName != this.initialState.firstName &&
      this.state.lastName != this.initialState.lastName &&
      this.state.campus != this.initialState.campus
    ) {
      let newStudent = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        campus: this.state.campus
      };
      this.props.addStudent(newStudent);
    } else {
      alert("Please fill out all appropriate fields");
    }
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div className="addStudentForm">
        <h1>Add New Student</h1>
        <Form>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{this.state.campus}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={this.handleChange}
                name="campus"
                value="Hunter College"
              >
                Hunter College
              </DropdownItem>
              <DropdownItem
                onClick={this.handleChange}
                name="campus"
                value="Baruch College"
              >
                Baruch College
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            type="submit"
            onClick={this.handleSubmit}
            value="Add Student"
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student
});

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(addStudentThunk(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentForm);
