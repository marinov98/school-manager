import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const AllStudentsView = props => {
  const { students, deleteStudent } = props;
  console.log(deleteStudent);
  console.log("hello");
  return (
    <div className="allStudentsView">
      {students.map((student, index) => (
        <div className="studentBox" key={index}>
          <Button className="studentDeleteBtn">
            <FontAwesomeIcon icon={faMinusCircle} />
          </Button>
          <h2 className="studentName">
            <Link to="/id/">
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
};

export default AllStudentsView;
