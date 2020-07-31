import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class DailyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: { dailyMenu: { picture: "" } },
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
  noMenu = () => {
    if (this.state.menu.dailyMenu.picture == "") {
      return <p>Le menu du jour n'est pas disponible</p>;
    } else {
      return (
        <Card.Img
          variant="top"
          src={"http://localhost:4000/" + this.state.menu.dailyMenu.picture}
          className="dailyMenu"
          alt="Menu du Jour"
        />
      );
    }
  };

  componentDidMount() {
    this.getDailyMenu();
  }
  render() {
    return (
      <Container className="dailyMenuContain">
        <Card className="menujour">
          <h2>Menu du Jour</h2>

          {this.noMenu()}
          <Card.Body>
            <p>{this.state.menu.dailyMenu.label}</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default DailyMenu;
