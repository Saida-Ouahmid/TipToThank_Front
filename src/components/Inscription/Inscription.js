import React, { Component } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: null,
      firstname: null,
      email: null,
      password: null,
      gender: null,
      adress: null,
      phone: null,
      age: null,
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
      adress: this.state.adress,
      phone: this.state.phone,
      age: this.state.age,
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
        },

        (error) => {
          console.log(error);
        }
      );
  };

  /*submit = (event) => {
     event.preventDefault(); //empecher le formulaire de recharger la page};
    console.log(this.state); // envoyé le contenu du formulaire dans la console
  };*/

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
              name="nom"
              onChange={this.change}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prénom"
              name="prenom"
              onChange={this.change}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="mail"
              placeholder="Email "
              name="mail"
              onChange={this.change}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
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
              placeholder="Femme; Homme; Autre"
              name="ville"
              onChange={this.change}
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
              name="ville"
              onChange={this.change}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telephone"
              name="tel"
              onChange={this.change}
            />
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Age"
              name="age"
              onChange={this.change}
            />
            <Form.Text className="text-muted"></Form.Text>
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
