import React, { Component } from "react";
import { connect } from "react-redux";
import AddStudentForm from "./AddStudentForm";
import AllStudentsView from "./AllStudentsView";
import { getStudentsThunk } from "../../actions/studentActions";
import "./AllStudents.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";

class AllStudentsContainer extends Component {
  constructor() {
    super();
    this.state = {
      toggleForm: false
    };
  }

  componentDidMount = () => {
    this.props.getStudents();
  };

  displayForm = () => {
    if (this.state.toggleForm) {
      return <AddStudentForm toggleForm={this.state.toggleForm} />;
    }
  };

  displayArrow = () => {
    if (!this.state.toggleForm) {
      return <FontAwesomeIcon icon={faChevronCircleDown} />;
    } else {
      return <FontAwesomeIcon icon={faChevronCircleUp} />;
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

  render() {
    return (
      <div className="allStudents">
        <Button
          className="addStudentFormToggleButton"
          onClick={this.toggleForm}
        >
          Add New Student {this.displayArrow()}
        </Button>
        {this.displayForm()}
        <AllStudentsView students={this.props.student.students} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student
});

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => dispatch(getStudentsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsContainer);
