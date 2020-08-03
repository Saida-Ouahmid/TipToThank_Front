import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="blocprincipal">
        <Card>
          <Card.Img
            variant="top"
            src={"http://localhost:8080" + this.props.image}
          />
          <Card.Body>
            <Card.Title>{this.props.lastname}</Card.Title>
            <Card.Text>{this.props.firstname}</Card.Text>
            <Link to="/Payment">
              <Button variant="warning" size="sm">
                Donner un Tip
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Cards;
