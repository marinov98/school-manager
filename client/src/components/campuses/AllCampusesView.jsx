import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { deleteCampusThunk } from "../../actions/campusActions";

class AllCampusesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campuses: this.props.campus.campuses
        };
    }

    render() {
        return (
            <div>
                {this.state.campuses.map((campus) => (
                    <div key={campus.id}>
                        <Link to="/singlecampus">
                            <p>Campus Name: {campus.name}</p>
                            <p>Campus Address: {campus.address}</p>
                        </Link>
                        <Button onClick={() => this.props.deleteCampus(campus.id)}>Delete Campus</Button>

                    </div>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    campus: state.campus
});

const mapDispatchToProps = dispatch => {
    return {
        deleteCampus: campusId => dispatch(deleteCampusThunk(campusId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllCampusesView);