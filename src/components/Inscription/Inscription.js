import React, { Component, useReducer } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

class Inscription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Bloc-principal">
        <div className="Titre">
          <p>Formulaire d'inscription </p>
        </div>
        <Form>
          <p className="sous-titre">Données requises </p>
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom" name="nom" />
          </Form.Group>
          <Form.Group controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Prénom" name="prenom" />
          </Form.Group>

          <Form.Group controlId="formMail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="mail" placeholder="Email " name="mail" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formPass">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="password"
            />
          </Form.Group>
          <Form.Group controlId="formPass2">
            <Form.Label>Confirmer mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="passwords"
            />
          </Form.Group>
        </Form>

        <Form>
          <p className="sous-titre">Données facultatives </p>
          <Form.Group controlId="formVille">
            <Form.Label>Genre </Form.Label>
            <Form.Control
              type="text"
              placeholder="Femme; Homme; Autre"
              name="ville"
            />
          </Form.Group>
          <Form.Group controlId="formVille">
            <Form.Label>Ville ou Code Postal</Form.Label>
            <Form.Control type="text" placeholder="Ville" name="ville" />
          </Form.Group>

          <Form.Group controlId="formTel">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control type="text" placeholder="Telephone" name="tel" />
          </Form.Group>
          <Form.Group controlId="formPoste">
            <Form.Label>Poste</Form.Label>
            <Form.Control type="text" placeholder="Poste occupé" name="poste" />
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
          <Link to="/connexion">
            <Button
              className="submitButton"
              variant="primary"
              block
              type="submit"
            >
              S'inscrire
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
export default Inscription;
