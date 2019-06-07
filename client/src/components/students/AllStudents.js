import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AllStudentsView from "./AllStudentsView";
import { getStudents } from "../../actions/studentActions";

class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    this.blankState = this.state;
  }
  render() {
    return (<AllStudentsView />);
  }
}

const mapStateToProps = state => ({
  students: state.students
});

const actions = { getStudents };

export default connect(
  mapStateToProps,
  actions
)(AllStudents);
