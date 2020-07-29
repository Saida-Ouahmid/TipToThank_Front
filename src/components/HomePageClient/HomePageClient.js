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
              <Card.Header>Tips sans compte client </Card.Header>
            </div>
            <Card.Body>
              <Card.Text>
                Je veux donner un pourboire sans créer de compte.
              </Card.Text>
              <Button variant="outline-warning" size="sm">
                Go !
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="connexion-container">
          <Card className="text-center">
            <div className="Titre">
              <Card.Header>Tips avec un compte client</Card.Header>
            </div>
            <Card.Body>
              <Card.Text>
                Je veux créer un compte / me connecter pour donner un pourboire
                et faire partie de la Team TiptoThank !
              </Card.Text>
              <Link to="/connexion">
                <Button variant="outline-warning" size="sm">
                  Go !
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default HomePageClient;
