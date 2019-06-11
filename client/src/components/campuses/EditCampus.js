import React, { Component } from "react";


class EditCampus extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempAddress: "",
            tempName:"",
            tempDescription: "",
            tempUrl: ""

        }
    }
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render(){
        return();
    }
}

export default EditCampus;
