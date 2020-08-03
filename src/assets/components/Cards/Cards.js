import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img
              variant="top"
              src={"http://localhost:4000" + this.props.image}
            />
            <Card.Body>
              <Card.Title>{this.props.lastname}</Card.Title>
              <Card.Text>{this.props.firstname}</Card.Text>
              <Link to="/Payment">
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Cards;
