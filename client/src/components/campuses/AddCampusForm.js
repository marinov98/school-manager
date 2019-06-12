import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../actions/campusActions";

class AddCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Location: ""
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
            this.state.Name !== this.initialState.Name &&
            this.state.Location !== this.initialState.Location
        ) {
            let newCampus = {
                Name: this.state.Name,
                Location: this.state.Location
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
                        name="Name"
                        placeholder="Campus Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="Location"
                        placeholder="Campus Location"
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
