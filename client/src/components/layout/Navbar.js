import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { id: 1, content: "All Campuses" },
        { id: 2, content: "All Students" }
      ]
    };
  }

  render() {
    return (
      <nav>
        <div className="logo-and-links">
          <div className="logo-box">
            <img src="" alt="Logo" className="logo" />
          </div>
          <div className="row">
            <ul className="main-nav">
              {this.state.options.map(option => (
                <li key={option.id}>
                  <a href="something">{option.content}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
