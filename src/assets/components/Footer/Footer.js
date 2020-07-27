import React, { Component } from "react";
import "./footer.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footer dropup">
        <Navbar collapseOnSelect expand="lg" bg="#edeaea">
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

              <NavDropdown title="Nous contacter" id="collasible-nav-dropdown">
                <NavDropdown.Item href="mailto:tiptothank@gmail.com">
                  Par mail
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

/** <Navbar.Brand href="#home">
                <img
                  src="logoTTT/logotranspblanc.png"
                  width="30"
                  height="30"
                  className="logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand> */
