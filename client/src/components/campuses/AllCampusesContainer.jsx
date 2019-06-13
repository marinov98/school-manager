import React, { Component } from "react";
import { connect } from "react-redux";
import AddCampusForm from "./AddCampusForm";
import DeleteCampusForm from "./DeleteCampusForm";
import AllCampusesView from "./AllCampusesView";
import SearchCampus from "./SearchCampus";
import { getCampusesThunk } from "../../actions/campusActions";

class AllCampusesContainer extends Component {
    constructor() {
        super();
        this.state = {
            toggleSearch: false,
            toggleForm: false,
            toggleDeleteForm: false
        };
    }

    componentDidMount = () => {
        this.props.getCampuses();
    };

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

    displayDeleteForm = () => {
        if (this.state.toggleDeleteForm) {
            return <DeleteCampusForm />;
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

    toggleDeleteForm = () => {
        this.setState(prevState => ({
            toggleDeleteForm: !prevState.toggleDeleteForm
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
                    <button onClick={this.toggleDeleteForm}> Delete Campus </button>
                    {this.displayDeleteForm()}
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

const mapDispatchToProps = dispatch => {
    return {
        getCampuses: () => dispatch(getCampusesThunk())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllCampusesContainer);