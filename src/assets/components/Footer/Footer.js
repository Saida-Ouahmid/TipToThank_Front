import React, { Component } from "react";
import "./footer.css";
import { Navbar, Nav } from "react-bootstrap";
class footer extends Component {
  render() {
    return (
      <div className="footer">
        <Navbar collapseOnSelect expand="lg" bg="#edeaea">
          <Navbar.Brand href="#home" className="textFooter">
            @TiPourBoire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" className="textFooter">
                Condition Général
              </Nav.Link>
              <Nav.Link href="#pricing" className="textFooter">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="textFooter">
                Langues
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="textFooter">
                A propos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default footer;
