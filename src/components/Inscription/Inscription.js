import React, { Component } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
/*import FormControl from "react-bootstrap/FormControl";*/

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: null,
      firstname: null,
      email: null,
      password: null,
      gender: null,
      age: null,
      adress: null,
      phone: null,
    };
  }

  /*fonction pour ecrire dans nos input*/
  change = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // identifier Id de l'input = choisir la valeur qui se trouve dans l'input
    });
  };

  addNewRegister = (e) => {
    e.preventDefault();
    const data = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      age: this.state.age,
      adress: this.state.adress,
      phone: this.state.phone,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:4000/client/register", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
          /*this.props.history.push(
            "/Connexion"
          );  pour allez vers la page connexion une fois l'inscription done*/
        },

        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="Bloc-principal">
        <div className="Titre">
          <p>Formulaire d'inscription </p>
        </div>
        <Form>
          <p className="sous-titre">Données requises </p>
          <Form.Group controlId="lastname">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom"
              name="lastname"
              onChange={this.change}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prénom"
              name="firstname"
              onChange={this.change}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="mail"
              placeholder="example@gmail.com"
              name="email"
              onChange={this.change}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe </Form.Label>
            <p className="reglemdp">
              Doit contenir au moins 8 caractères dont : une minuscule, une
              majuscule, un chiffre et un caractère special.
            </p>
            <Form.Control
              type="password"
              placeholder="**************"
              name="password"
              onChange={this.change}
            />
          </Form.Group>
        </Form>

        <Form>
          <p className="sous-titre">Données facultatives </p>
          <Form.Group controlId="gender">
            <Form.Label> Genre </Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="gender"
              onChange={this.change}
            >
              <option>-</option>
              <option>Femme</option>
              <option>Homme</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="adress">
            <Form.Label>Ville ou Code Postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cannes, Nice, Mougins, 06200, ..."
              name="adress"
              onChange={this.change}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="06XXXXXXXX"
              name="phone"
              onChange={this.change}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre âge ( sans vous rajeunir ;-) )"
              name="age"
              onChange={this.change}
            />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              className="checkbox"
              type="checkbox"
              label="J'accepte les CGU et CGV."
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              className="checkbox"
              type="checkbox"
              label="J'accepte que mes données soient utilisés à des fins commerciales."
            />
          </Form.Group>

          <Button
            className="button"
            variant="outline-warning"
            size="sm"
            block
            type="submit"
            onClick={this.addNewRegister}
          >
            S'inscrire
          </Button>
          <p>{this.state.message}</p>
        </Form>
      </div>
    );
  }
}
export default Inscription;
