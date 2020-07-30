import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.props.lastname}</Card.Title>
            <Card.Text>{this.props.firstname}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
