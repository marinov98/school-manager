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
      <Navbar>
        <NavbarBrand>School Manager</NavbarBrand>
        <Nav className="main-nav">
          {this.state.options.map(option => (
            <NavItem key={option.id}>
              <NavLink>
                <Link to={option.address}>{option.content}</Link>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
