import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="#edeaea"
          fixed="bottom"
          className="footer"
        >
          <Navbar.Brand href="#home" className="textFooter">
            #TiptoThank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Conditions générales"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="cgu-cgv/CGV_TIPTOTHANK.pdf">
                  CG de vente
                </NavDropdown.Item>
                <NavDropdown.Item href="cgu-cgv/CGU_MangoPay.pdf">
                  CG d'utilisation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Nous contacter" id="collasible-nav-dropdown">
                <NavDropdown.Item href="mailto:tiptothank@gmail.com">
                  Par e-mail
                </NavDropdown.Item>
                <NavDropdown.Item href="https://facebook.fr">
                  Sur facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://instagram.fr">
                  Sur instagram
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
