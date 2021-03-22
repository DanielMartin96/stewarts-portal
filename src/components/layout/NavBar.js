import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">doorsAndDrawers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Kitchen Doors</Nav.Link>
          <Nav.Link href="#link">Bedroom Doors</Nav.Link>
          <NavDropdown title="Accessories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Door Accessories
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Handles</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Hinges</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Storage</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Kitchen Cabinets</Nav.Link>
          <Nav.Link href="#link">Videos & Guides</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
