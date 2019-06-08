import React, { Component } from "react";
import { connect } from "react-redux";
import AddStudentForm from "./AddStudentForm";
import AllStudentsView from "./AllStudentsView";
import { getStudentsThunk } from "../../actions/studentActions";

class AllStudentsContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.getStudents();
  };

  render() {
    return (
      <div className="allStudents">
        <AddStudentForm />
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
