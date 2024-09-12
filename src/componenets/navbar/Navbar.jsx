import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import logo from "../../assets/logo-i2t.png";

function CollapsibleExample() {
  return (
    <Navbar
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="colo bg-[#04182D]"
    >
      <Container className="flex">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={NavLink} exact to="/" className="nav-compo">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/our-domains" className="nav-compo">
              Our Domains
            </Nav.Link>
            <Nav.Link as={NavLink} to="/our-course" className="nav-compo">
              Our Course
            </Nav.Link>
            <Nav.Link as={NavLink} to="/for-educators" className="nav-compo">
              For Educators
            </Nav.Link>
            <Nav.Link as={NavLink} to="/engineering" className="nav-compo">
              Engineering
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about-us" className="nav-compo">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
