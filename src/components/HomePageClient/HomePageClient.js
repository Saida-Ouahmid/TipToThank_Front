import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./HomePageClient.css";

class HomePageClient extends Component {
  render() {
    return (
      <div>
        <div className="connexion-container">
          <Card className="text-center">
            <div className="Titre">
              <Card.Header>Pourboire avec un compte TipToThank</Card.Header>
            </div>
            <Card.Body>
              <Card.Text>
                Pour donner un pourboire, veuillez-vous connecter à votre compte
                TipToThank en cliquant sur le boutton ci-dessous.
              </Card.Text>
              <Link to="/connexion">
                <Button variant="outline-warning" size="sm">
                  Go
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="connexion-container">
          <Card className="text-center">
            <div className="Titre">
              <Card.Header>Pourboire sans compte TipToThank</Card.Header>
            </div>
            <Card.Body>
              <Card.Text>
                Vous avez pas de compte TipToThank? cliquez sur le boutton
                ci-dessous pour donner un pourboire.
              </Card.Text>
              <Button variant="outline-warning" size="sm">
                Go
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default HomePageClient;
