import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./components/layout/Homepage";
import AllStudents from "./components/students/AllStudentsContainer";
import AllCampuses from "./components/campuses/AllCampusesContainer";
import SingleCampus from "./components/campuses/SingleCampus";
import SingleStudent from "./components/students/SingleStudent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          {/* <SingleStudent
            name="Bob Anderson"
            gpa={3.6}
            registered={true}
            campus="Fung University"
            id={5}
          /> */}
          <Route path="/" component={SingleStudent}>
            <Route path="/allstudents" component={AllStudents} />
            <Route path="/allcampuses" component={AllCampuses} />
            <Route path="/singlecampus" component={SingleCampus} />
          </Route>
        </div>
      </Router>
    );
  }
}
