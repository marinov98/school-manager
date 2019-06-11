import React from "react";
import { Link } from "react-router-dom";

const SingleCampusView = props => {
    const { campuses } = props;
    return (
        <div>
            {campuses.map((campus, index) => (
                <div key={index}>
                    <p>Name: {campus.Name}</p>
                    <p>Address: {campus.Address}</p>
                </div>
            ))}
        </div>
    );
};

export default SingleCampusView;
