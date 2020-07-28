import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbarr extends Component {
  render() {
    return (
      <div>
        <Navbar className="mr-auto" fixed="top" className="barre-de-menu">
          <Navbar.Brand onClick={() => localStorage.clear()}>deco</Navbar.Brand>
          <Nav.Link className="navlink">
            <Link to="/home" exact>
              <img src="logoTTT/logotranspblanc.png" className="logo" />
            </Link>
          </Nav.Link>
          <Navbar.Brand className="ttt">Tip To Thank</Navbar.Brand>
        </Navbar>
        <div className="TiPourBoire"></div>
      </div>
    );
  }
}
export default Navbarr;
