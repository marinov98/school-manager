import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./components/layout/Homepage";
import AllStudents from "./components/students/AllStudents";

const store = createStore(rootReducer);
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavigationBar />
          </div>
          <Route exact path="/" component={Homepage} />
          <Route path="/allstudents" component={AllStudents} />
        </div>
      </Router>
    );
  }
}
