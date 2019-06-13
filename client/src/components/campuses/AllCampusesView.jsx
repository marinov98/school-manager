import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = props => {
    const { campuses } = props;
    return (
        <div>
            {campuses.map((campus, index) => (
                <div key={index}>
                    <Link to="/singlecampus">
                        <p>Campus Name: {campus.Name}</p>
                        <p>Campus Location: {campus.Location}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllCampusesView;
