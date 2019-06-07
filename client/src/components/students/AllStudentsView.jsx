import React from "react";
import { Link } from "react-router-dom";
import "./AllStudents.css";

const AllStudentsView = props => {
  const { students } = props;
  return (
    <div className="AllStudents">
      <div style={{ textAlign: "center" }}>
        <h1>All Students</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {students.map(student => (
            <div className="studentBox">
              <p>
                <Link to="/id/">
                  <h2>{student.name}</h2>
                </Link>
              </p>
              <h3>{student.team_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudentsView;
