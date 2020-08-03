import React, { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DailyMenu.css";

class DailyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: { dailyMenu: { picture: "", label: "" } },
    };
  }

  getDailyMenu = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "GET",
      headers: headers,
    };

    fetch("http://localhost:4000/client/getMenu", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          this.setState({ menu: data.menu });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  componentDidMount() {
    this.getDailyMenu();
  }

  render() {
    return (
      <Container className="blocprincipal">
        <Card>
          <Link to="/Home">
            <Button className="button" variant="warning" size="sm">
              Donner un pourboire
            </Button>
          </Link>
          <h2 className="Titre">Menu du Jour</h2>
          <Card.Body>
            <p>{this.state.menu.dailyMenu.label}</p>
          </Card.Body>
          <Card.Img
            variant="top"
            src={"http://localhost:4000/" + this.state.menu.dailyMenu.picture}
            className="dailyMenu"
            alt="Menu du Jour"
          />
        </Card>
      </Container>
    );
  }
}

export default DailyMenu;
