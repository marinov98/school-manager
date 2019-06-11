import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampusThunk } from "../../actions/campusActions";

class DeleteCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campusName: ""
        };
        // this.initialState = this.state;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // if (this.state.Name !== this.initialState.Name) {
        this.props.deleteCampus(this.state.campusName);
        // } else {
        //     alert("Please fill out all the appropriate fields");
        // }
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="campusName"
                        placeholder="Campus Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Delete Campus"
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
        deleteCampus: campusName => dispatch(deleteCampusThunk(campusName))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteCampusForm);
