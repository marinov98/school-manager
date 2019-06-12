import React, { Component } from "react";
import { connect } from "react-redux";
import AddCampusForm from "./AddCampusForm";
import AllCampusesView from "./AllCampusesView";
import SearchCampus from "./SearchCampus";

class AllCampusesContainer extends Component {
    constructor() {
        super();
        this.state = {
            toggleSearch: false,
            toggleForm: false
        };
    }

    displayCampuses = () => {
        if (this.state.toggleSearch) {
            if (this.props.campus.filteredCampuses.length === 0) {
                return <p>No Results Found</p>
            }
            else {
                return <AllCampusesView campuses={this.props.campus.filteredCampuses} />
            }
        }
        else {
            if (this.props.campus.campuses.length === 0) {
                return <p>No Campuses Avaliable</p>
            }
            else {
                return <AllCampusesView campuses={this.props.campus.campuses} />
            }
        }
    }

    displaySearch = () => {
        return <SearchCampus />;
    };

    displayForm = () => {
        if (this.state.toggleForm) {
            return <AddCampusForm />;
        }
    };

    toggleSearch = () => {
        this.setState(prevState => ({
            toggleSearch: !prevState.toggleSearch
        }));
    };

    toggleForm = () => {
        this.setState(prevState => ({
            toggleForm: !prevState.toggleForm
        }));
    };

    render() {
        if (!this.state.toggleSearch) {
            return (
                <div>
                    <h1>All Campuses</h1>
                    <button onClick={this.toggleSearch}> Search </button>
                    {this.displayCampuses()}
                    <button onClick={this.toggleForm}> Add New Campus </button>
                    {this.displayForm()}
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>All Campuses</h1>
                    <button onClick={this.toggleSearch}> View All </button>
                    {this.displaySearch()}
                    {this.displayCampuses()}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    campus: state.campus
});

export default connect(mapStateToProps)(AllCampusesContainer);