import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import React, { Component } from "react";
import "./connexion.css";
import { Link } from "react-router-dom";

/*import { Link } from "react-router-dom";*/

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  change = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // identifier Id de l'input = choisir la valeur qui se trouve dans l'input
    });
  };

  loginClient = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:4000/client/login", options)
      .then((response) => {
        return response.json();
      })

      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
          if (responseObject.token && responseObject.userId) {
            /*stocker le token et l'userId dans le localStorage pour pouvoir les rappeler une fois la connection reussie */
            localStorage.setItem("token", responseObject.token);
            localStorage.setItem("userID", responseObject.userId);
            /*permet d'allez vers la page profil APRES avoir valider la connexion (et pouvoir recuperer le localstorage aussi)*/
            this.props.history.push("/Profil");
          }
        },

        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="background">
        <div className="connexion-container">
          <h1 className="titreConnexion">Connexion</h1>

          <Form className="identifiants">
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  E-mail de connexion
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name="email" id="email" placeholder="Email" />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Mot de passe
                </Form.Label>
                <Form.Control
                  name="password"
                  className="mb-2"
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </Col>

              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="mb-2"
                  label="Se souvenir de moi"
                />
              </Col>

              <Button
                type="submit"
                className="mb-2"
                onClick={this.loginClient} /*className="sign-up"*/
              >
                Se connecter
              </Button>
              <p>{this.state.message}</p>

              <Link to="/Inscription">
                <Button type="submit" className="sign-up">
                  S'inscrire
                </Button>
              </Link>
            </Form.Row>

            <p className="mdp">Mot de passe oublié</p>
          </Form>
        </div>
      </div>
    );
  }
}
export default Connexion;
