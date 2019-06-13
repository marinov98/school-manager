import React, { Component } from "react";
import { connect } from "react-redux";
import AddCampusForm from "./AddCampusForm";
import AllCampusesView from "./AllCampusesView";
import "./AllCampuses.css";
import { Button } from "reactstrap";
import { getCampusesThunk } from "../../actions/campusActions";

class AllCampusesContainer extends Component {
  constructor() {
    super();
    this.state = {
      toggleForm: false
    };
  }

  componentDidMount = () => {
    this.props.getCampuses();
  };

  displayCampuses = () => {
    if (this.props.campus.campuses.length === 0) {
      return <p>No Campuses Avaliable</p>;
    } else {
      return <AllCampusesView />;
    }
  };

  displayForm = () => {
    if (this.state.toggleForm) {
      return <AddCampusForm />;
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

<<<<<<< HEAD
  render() {
    return (
      <div className="allCampuses">
        <h1 className="allCampusesHeader">All Campuses</h1>
        {this.displayCampuses()}
        <Button className="addNewCampusButton" onClick={this.toggleForm}>
          {" "}
          Add New Campus{" "}
        </Button>
        {this.displayForm()}
      </div>
    );
  }
=======
    render() {
        return (
            <div className="allCampuses">
                <h1 className="allCampusesHeader">All Campuses</h1>
                {this.displayCampuses()}
                <Button className="addNewCampusButton" onClick={this.toggleForm}> Add New Campus </Button>
                {this.displayForm()}
            </div>
        );
    }
>>>>>>> 5fdc0aa522954d4d7ce146d7cb62092e728ceb09
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
