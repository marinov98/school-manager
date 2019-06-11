import React, { Component } from "react";
import { connect } from "react-redux";
import { searchCampusThunk } from "../../actions/campusActions";

class SearchCampus extends Component {
    constructor() {
        super();
        this.state = {
            filterWord: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchCampus(this.state.filterWord);
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="filterWord"
                        placeholder="Campus or Location"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Search"
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
        searchCampus: filterWord => dispatch(searchCampusThunk(filterWord))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCampus);
