import React, { useState } from "react"; // Import useState
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import logo from "../../assets/logo-i2t.png";

function CollapsibleExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="colo bg-[#04182D]"
      expanded={expanded}
    >
      <Container className="flex">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-light"
          onClick={handleToggle} // Handle toggle click
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar-collapse-custom"
        >
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/our-domains"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              Our Domains
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/our-course"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              Our Course
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/for-educators"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              For Educators
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/engineering"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              Engineering
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about-us"
              className="nav-compo"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
