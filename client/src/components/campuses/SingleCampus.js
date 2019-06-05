import React, { Component } from "react";

class SingleCampus extends Component{
    constructor(props){
        super(props);
        this.state ={
            school:[
                {
                    campus: "Hunter College",
                    imageURL: "../../img/hunter-college.jpg",
                }
            ]
        };

    }
    render(){
        return(
            <div>
                <h1 style={{ textAlign: "center" }}> Single Campus </h1>
                <h2 style={{textAlign: "center"}}> Hunter College </h2>
                <p>Hunter College is one of the constituent colleges of the City University of New York, an American public university.
                It is located in the Lenox Hill neighborhood of the Upper East Side of Manhattan, New York City.</p>
                <img
                  src={require("../../img/hunter-college.jpg")}
                  style={{ height: "250px", width: "250px" }}
                />
                <p>695 Park Ave, New York, NY 10065</p>
                <button>Edit</button>
                <button>Delete</button>

            </div>
        );
    }
}

export default SingleCampus;
