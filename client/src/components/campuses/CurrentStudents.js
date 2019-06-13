import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import "./SingleCampus.css";
//import EditCampus from "./EditCampus"
//import AllStudents from "../students/AllStudentsContainer";

class CurrentStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            toggleForm: false,
        };
    }

    componentDidUpdate = () => {
        console.log("CAMPUS STATE: ");
        console.log(this.state.students);
    }

    static getDerivedStateFromProps = (props,prevState) => {
        let targetCampus = "1";
        let indexOfTargetCampus = props.campus.campuses.findIndex(campus => campus.Id === targetCampus);
        let thisCampusObject = props.campus.campuses[indexOfTargetCampus].CurrentStudents;
         console.log(thisCampusObject);
        return { students: thisCampusObject};
    };


    displayStudents = () =>{
        console.log(this.state.students.Name)
        return (
            <div>
                <h1 className = "name">{this.state.students.Name}</h1>
            </div>
        )
    }

    render(){
        console.log(this.state.students);
            return(
                <div>
                    <h1 className = "students">Students</h1>
                    {this.displayStudents()}
                </div>
            )
    }
}

const mapStateToProps = state => ({
    campus: state.campus
});


export default connect(mapStateToProps)(CurrentStudents);
