import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          id: 0,
          name: "David Cohen",
          campus: "Hunter College",
          imageURL: "../../img/david-cohen.jpg"
        },
        { id: 1, name: "Zoey Smith", campus: "Brooklyn College", imageURL: "" },
        { id: 2, name: "John Goe", campus: "Baruch College", imageURL: "" }
      ]
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>All Students</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {this.state.students.map(student => (
            <div
              className="studentBox"
              style={{
                border: "1px solid black",
                padding: "25px",
                margin: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              {/* <img
                src={require("../../img/david-cohen.jpg")}
                style={{ height: "250px", width: "250px" }}
                alt="David-Cohen"
              /> */}
              <p>
                <Link to="/id/">
                  <h2>{student.name}</h2>
                </Link>
              </p>
              <h3>{student.campus}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

AllStudents.propTypes = {
  students: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  students: state.students
});

const actions = { getStudents };

export default connect(
  mapStateToProps,
  actions
)(AllStudents);
