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

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { id: 0, content: "Home", address: "/" },
        { id: 1, content: "All Campuses", address: "/campuses" },
        { id: 2, content: "All Students", address: "/students" }
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
