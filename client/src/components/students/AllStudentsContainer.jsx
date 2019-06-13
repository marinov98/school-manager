import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import AllStudentsView from "./AllStudentsView";
import {
  getStudentsThunk,
  deleteStudentThunk
} from "../../actions/studentActions";
import { getCampusesThunk } from "../../actions/campusActions";
import "./AllStudents.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

class AllStudentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false
    };
  }

  componentDidMount = () => {
    this.props.getStudents();
  };

  displayStudents = () => {
    if (this.props.student.students.length === 0) {
      return <h2 className="noStudentsFound">No Students Avaliable</h2>;
    } else {
      return <AllStudentsView />;
    }
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
        {this.displayStudents()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student,
  campus: state.campus
});

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => dispatch(getStudentsThunk()),
    getCampuses: () => dispatch(getCampusesThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsContainer);
