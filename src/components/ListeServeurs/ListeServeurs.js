import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Liste extends Component {
  constructor(props) {
    console.log();
    super(props);
    this.state = {};
  }

  postDataServeurs = (e) => {
    e.preventDefault();
    const data = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:4000/client/getDataServeur", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    return (
      <div className="background">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title value={this.state.lastname}></Card.Title>
              <Card.Text value={this.state.firstname}> </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Button></Button>
      </div>
    );
  }
}

export default Liste;
