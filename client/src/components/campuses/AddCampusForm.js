import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../actions/campusActions";

class AddCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageURL: "",
            address: "",
            description: ""
        };
        this.initialState = this.state;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.name !== this.initialState.name &&
            this.state.imageURL !== this.initialState.imageURL &&
            this.state.address !== this.initialState.address &&
            this.state.description !== this.initialState.description
        ) {
            let newCampus = {
                name: this.state.name,
                imageURL: this.state.imageURL,
                address: this.state.address,
                description: this.state.description
            };
            this.props.addCampus(newCampus);
        } else {
            alert("Please fill out all the appropriate fields");
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Campus Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Image Url"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Add Campus"
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    campus: state.campus
});

const mapDispatchToProps = dispatch => {
    return {
        addCampus: campus => dispatch(addCampusThunk(campus))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCampusForm);