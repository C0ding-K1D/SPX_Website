import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/NavLogoMini.png";
import "./NavBar.css";

const NavComponent = () => {
  return (
    <Navbar bg="myPrimary" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand>
        <LinkContainer to="/">
          <img className="logo" src={logo} alt="company logo" />
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle className="burger" />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="About">
            <LinkContainer to="/services">
              <NavDropdown.Item>Services</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/history">
              <NavDropdown.Item>History</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/media">
            <Nav.Link className="nav-link">Media</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Login">
            <NavDropdown.Item>Dropbox</NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to="/faq">
            <Nav.Link className="nav-link">FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/careers">
            <Nav.Link className="nav-link">Careers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="nav-link">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
