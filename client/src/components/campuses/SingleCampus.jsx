import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SingleCampus.css";
import EditCampus from "./EditCampus"
//import SingleCampusView from "./SingleCampusView"
import AllStudents from "../students/AllStudentsContainer";

class SingleCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campus: {},
            toggleForm: false,
        };
    }

    componentDidUpdate = () => {
        console.log("CAMPUS STATE: ");
        console.log(this.state.campus);
    }

    componentDidMount = () => {
        const {
            match: { params }
        } = this.props;
        console.log(params.campusId);
    }


    static getDerivedStateFromProps = (props, prevState) => {
        let targetCampus = 22;
        let indexOfTargetCampus = props.campus.campuses.findIndex(campus => campus.id === targetCampus);
        console.log(indexOfTargetCampus);
        let thisCampusObject = props.campus.campuses[indexOfTargetCampus];
        console.log(thisCampusObject);
        return { campus: props.campus.campuses[indexOfTargetCampus] };
    };

    displayForm = () => {
        if (this.state.toggleForm) {
            return <EditCampus />;
        }
    };

    displayCampus = () => {
        return (
            <div>
                <h1>{this.state.campus.Name}</h1>
                <img
                    src={this.state.campus.ImageURL}
                    style={{ height: "250px", width: "250px" }}
                />
                <p>{this.state.campus.Description}</p>
                <p>{this.state.campus.Address}</p>
            </div>
        )
    }


    toggleForm = () => {
        this.setState(prevState => ({
            toggleForm: !prevState.toggleForm
        }));
    };
    render() {
        console.log(this.state.campus);
        if (!this.state.toggleForm) {
            return (
                <div>
                    <h1>Single Campus</h1>
                    {this.displayCampus()}
                    <button onClick={this.toggleForm}>Edit</button>
                    <button>Delete</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button onClick={this.toggleForm}>Go Back</button>
                    {this.displayForm()}
                </div>
            )
        }
    }
}









const mapStateToProps = state => ({
    campus: state.campus
});


export default connect(mapStateToProps)(SingleCampus);
