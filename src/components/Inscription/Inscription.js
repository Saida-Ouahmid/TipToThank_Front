import React, { Component } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
/*import FormControl from "react-bootstrap/FormControl";*/
/*import { Link } from "react-router-dom";*/

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
    /*alert(
      "Votre inscription a bien été prise en compte. Un email de confirmation vous a été envoyé. Merci"
    );*/
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
          /*this.props.history.push("/Home"); */ // pour affiher le profil
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
              value={this.state.lastname}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prénom"
              name="firstname"
              onChange={this.change}
              value={this.state.firstname}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="mail"
              placeholder="email"
              name="email"
              onChange={this.change}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={this.change}
              value={this.state.password}
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
              placeholder="Femme; Homme; Autre"
              name="genre"
              onChange={this.change}
              value={this.state.gender}
            >
              <option>Femme</option>
              <option>Homme</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="adress">
            <Form.Label>Ville ou Code Postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ville"
              name="adress"
              onChange={this.change}
              value={this.state.adress}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telephone"
              name="phone"
              onChange={this.change}
              value={this.state.phone}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="age"
              name="age"
              onChange={this.change}
              value={this.state.age}
            />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="J'accepte les CGU et CGV." />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="J'accepte que mes données soient utilisés à des fins commerciales."
            />
          </Form.Group>

          <Button
            className="submitButton"
            variant="primary"
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
