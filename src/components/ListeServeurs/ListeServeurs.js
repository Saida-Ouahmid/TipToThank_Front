import React, { Component } from "react";
import Cards from "../../assets/components/Cards/Cards";
import { Card, CardDeck } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Liste extends Component {
  constructor(props) {
    console.log();
    super(props);
    this.state = { serveur: [] };
  }

  componentDidMount() {
    this.postDataServeurs();
  }

  postDataServeurs = (e) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "GET",
      headers: headers,
      /*body: JSON.stringify(data),*/
    };

    fetch("http://localhost:4000/client/getDataServeur", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          this.setState({ serveur: data });
        },

        (error) => {
          console.log(error);
        }
      );
  };

  display = () => {
    let contentDisplay = [];
    this.state.serveur.forEach((element, index) => {
      contentDisplay.push(
        <Cards
          key={index}
          lastname={element.lastname}
          firstname={element.firstname}
        />
      );
    });

    return contentDisplay;
  };

  render() {
    return (
      <div className="wrapper">
        <div>{this.display()}</div>
      </div>
    );
  }
}

export default Liste;
