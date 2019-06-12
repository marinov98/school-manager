import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = props => {
  const { students } = props;
  return (
    <div className="allStudentsView">
      {students.map((student, index) => (
        <div className="studentBox" key={index}>
          <div className="studentName">
            <h2>
              <Link to="/id/">{student.firstName}</Link>
            </h2>
          </div>
          <div className="studentCampus">
            <h3>{student.campus}</h3>
          </div>
          <div className="studentImage" />
        </div>
      ))}
    </div>
  );
};

export default AllStudentsView;
