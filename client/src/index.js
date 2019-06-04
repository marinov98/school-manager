import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./components/layout/Homepage";
import AllStudents from "./components/students/AllStudents";
import SingleCampus from "./components/campuses/SingleCampus"

const routing = (
  <Router>
    <div>
      <div>
        <NavigationBar />
      </div>
      <Route exact path="/" component={Homepage} />
      <Route path="/allstudents" component={AllStudents} />
      <Route path="/singlecampus" component={SingleCampus} />

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
