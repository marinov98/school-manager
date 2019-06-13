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
          <Route path="/" component={Homepage}>
            <Route path="/students" component={AllStudents} />
            <Route path="/campuses" component={AllCampuses} />
            <Route path="/singlecampus" component={SingleCampus} />
            <Route path="/singleStudent" component={SingleStudent} />
          </Route>
        </div>
      </Router>
    );
  }
}
