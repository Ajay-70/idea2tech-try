import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function CollapsibleExample() {
  return (
    <Navbar
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      // className="colo bg-[#5D232F]"
      // className="colo bg-[#54C8E0]"
      className="colo bg-[#696969] "
      // className="colo"
      style={{
        backgroundImage: "linear-gradient(135deg, #FABF2C,#696969 , #FABF2C)",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img className="h-12" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="nav-compo" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-compo" href="/our-domains">
              Our Domains
            </Nav.Link>
            <Nav.Link className="nav-compo" href="/our-course">
              Our Course
            </Nav.Link>

            <Nav.Link className="nav-compo" href="/for-educators">
              For Educators
            </Nav.Link>
            <Nav.Link className="nav-compo" href="/engineering">
              Engineering
            </Nav.Link>
            <Nav.Link className="nav-compo" href="/about-us">
              About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
