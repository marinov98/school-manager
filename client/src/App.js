import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./components/layout/Homepage";
import AllStudents from "./components/students/AllStudentsContainer";
import Campuses from "./components/campuses/Campuses";
import SingleCampus from "./components/campuses/SingleCampus";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route path="/" component={Homepage}>
            <Route path="/allstudents" component={AllStudents} />
            <Route path="/allcampuses" component={Campuses} />
            <Route path="/singlecampus" component={SingleCampus} />
          </Route>
        </div>
      </Router>
    );
  }
}
