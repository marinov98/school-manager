import React, { Component } from 'react'

import PropTypes from 'prop-types'
//import { navBar } from "NavBar.js"

export function navBar() {
    return <nav>
         <div className="logo-and-links">
        <div className="logo-box">
          <img src="" alt="Logo" className="logo" />
        </div>
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="#us">All Campuses</a>
            </li>
            <li>
              <a href="#mission">All Students</a>
            </li>
            </ul>
            </div>
            </div>
        </nav>;
}
class Homepage extends Component {
    constructor(probs) {
        super(probs);
    }


    render() {
        return (
            <div>
                {navBar()}
                <div className="mainPage">
                    <h1>School Manager</h1>
                </div>
            </div>
        );
    }
}


export default Homepage;