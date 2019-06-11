import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./HomePage.css";

// const allStyle = {
//   backgroundColor: "purple",
//   color: "black"
// };

// const badgeStyle = {
//   fontSize: "20px"
// };

// const navStyle = {
//   float: "right",
//   listStyle: "none",
//   marginTop: "15px"
// };

// const itemStyle = {
//   display: "inline-block",
//   marginLeft: "40px"
// };

// const linkStyle = {
//   padding: "3px",
//   color: "yellow",
//   textDecoration: "none",
//   textTransform: "uppercase",
//   borderBottom: "2px solid"
// };

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { id: 0, content: "Home", address: "/" },
        { id: 1, content: "All Campuses", address: "/allcampuses" },
        { id: 2, content: "All Students", address: "/allstudents" }
      ]
    };
  }

  render() {
    return (
      <Navbar className="NavBar">
        <NavbarBrand>
          <img
            className="logo"
            src={require("../../img/logo_file.png")}
            alt="logo"
          />
        </NavbarBrand>
        <Nav className="main-nav">
          {this.state.options.map(option => (
            <NavItem key={option.id}>
              <Link to={option.address}>{option.content}</Link>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
