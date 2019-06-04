import React, { Component } from "react";

class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        { id: 0, name: "John Doe", campus: "Hunter College" },
        { id: 1, name: "John Foe", campus: "Brooklyn College" },
        { id: 2, name: "John Goe", campus: "Baruch College" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>All Students</h1>
        {this.state.students.map(student => (
          <div className="studentBox">
            <img />
            <p>
              <a href="/id/">Student Name</a>
            </p>
            <p>Campus Name</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AllStudents;
