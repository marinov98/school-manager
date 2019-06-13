import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import AllStudentsView from "./AllStudentsView";
import {
  getStudentsThunk,
  deleteStudentThunk
} from "../../actions/studentActions";
import "./AllStudents.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faMinusCircle
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
        <div className="allStudentsView">
          {this.props.student.students.map((student, index) => (
            <div className="studentBox" key={index}>
              <Button
                className="studentDeleteBtn"
                onClick={() => this.props.deleteStudent(student.id)}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </Button>
              <h2 className="studentName">
                <Link to={"/students/" + student.id}>
                  {student.firstName} {student.lastName}
                </Link>
              </h2>
              <div className="studentCampus">
                <h3>{student.campus}</h3>
              </div>
              <img className="studentImage" src={student.imageURL} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student
});

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => dispatch(getStudentsThunk()),
    deleteStudent: studentId => dispatch(deleteStudentThunk(studentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsContainer);
