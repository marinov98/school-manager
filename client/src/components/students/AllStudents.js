import React, { Component } from "react";

class AllStudents extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>All Students</h1>
        <div className="studentBox">
          <img />
          <p>
            <a href="">Student Name</a>
          </p>
          <p>
            <a href="">Campus Name</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AllStudents;
