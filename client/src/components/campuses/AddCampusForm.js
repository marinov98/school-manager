import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../actions/campusActions";
import {
    Form,
    Label,
    Input,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

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
            <div className="addCampusForm">
                <Form>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Campus Name"
                        onChange={this.handleChange}
                    />
                    <Input
                        type="text"
                        name="imageURL"
                        placeholder="Image Url"
                        onChange={this.handleChange}
                    />
                    <Input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={this.handleChange}
                    />
                    <Input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange}
                    />
                    <Input
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Add Campus"
                    />
                </Form>
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