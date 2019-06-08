import React from "react";
import { Link } from "react-router-dom";
import "./AllStudents.css";

const AllStudentsView = props => {
  const { students } = props;
  return (
    <div className="allStudentsView">
      {students.map((student, index) => (
        <div className="studentBox" key={index}>
          <h2>
            <Link to="/id/">{student.name}</Link>
          </h2>
          <h3>{student.team_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllStudentsView;
