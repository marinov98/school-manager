import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { deleteStudentThunk } from "../../actions/studentActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class AllStudentsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  student: state.student
});

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: studentId => dispatch(deleteStudentThunk(studentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsView);
