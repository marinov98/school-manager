import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SingleCampus.css";
//import EditCampus from "./EditCampus"
//import SingleCampusView from "./SingleCampusView"
import AllStudents from "../students/AllStudentsContainer";

class SingleCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campus: {},
            isEditOn: true
        };
    }

    componentDidUpdate = () => {
        console.log("CAMPUS STATE: ");
        console.log(this.state.campus);
    }

    static getDerivedStateFromProps = (props,prevState) => {
        let targetCampus = "Hunter College";
        let indexOfTargetCampus = props.campus.campuses.findIndex(campus => campus.Name === targetCampus);
         let thisCampusObject = props.campus.campuses[indexOfTargetCampus];
         console.log(thisCampusObject);
        return { campus: props.campus.campuses[indexOfTargetCampus]};
    };

    // componentDidMount = () => {
    //     let targetCampus = "Hunter College";
    //     let indexOfTargetCampus = this.props.campus.campuses.findIndex(campus => campus.Name === targetCampus);
    //     console.log("INDEX:");
    //     console.log(indexOfTargetCampus); //0
    //     let thisCampusObject = this.props.campus.campuses[indexOfTargetCampus];
    //     console.log("CAMPUS OBJECT: ");
    //     console.log(thisCampusObject);
    //
    //     this.setState(prevState => ({
    //         campus: {
    //             ...prevState.campus,
    //             thisCampusObject
    //         }
    //     }));
    //     console.log(this.state.campus);
    // }


    displayCampus = () =>{
        //return <SingleCampusView campuses={this.props.campus} />
        return <h1>{this.state.campus.Name}</h1>
    }
    render(){
        console.log(this.state.campus);
        console.log(this.state.campus.Name);
        return (
            <div>
                <h1>Single Campus</h1>
                {this.displayCampus()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    campus: state.campus
});


export default connect(mapStateToProps)(SingleCampus);
