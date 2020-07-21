import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import React, { Component } from "react";
import "./connexion.css";
import { Link } from "react-router-dom";

class Connexion extends Component {
  constructor(props) {
    super(props);
  }

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
                  <FormControl
                    name="email"
                    id="inlineFormInputGroup"
                    placeholder="Email"
                  />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Mot de passe
                </Form.Label>
                <Form.Control
                  name="password"
                  className="mb-2"
                  id="inlineFormInput"
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

              <Button type="submit" className="mb-2" className="sign-up">
                Se connecter
              </Button>

              <Link to="/inscription">
                <Button type="submit" className="sign-up">
                  S'inscrire
                </Button>
              </Link>
            </Form.Row>
            <Link to="#">
              <p className="mdp">Mot de passe oublié</p>
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}
export default Connexion;
