import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
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
      </nav>
    );
  }
}

export default Navbar;
