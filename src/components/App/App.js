/**
 * App.js - Main app component
 */

/*Module imports*/
import React, { Component } from "react";
//import Client from "../Profil/Profil";
//import Inscription from "../Inscription/Inscription";
import Connexion from "../Connexion/Connexion";
import Footer from "../../assets/components/Footer/Footer";
import { BrowserRouter as Router /*Route, Switch */ } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  /* constructor(props) {
    super(props);
  }*/
  render() {
    return (
      <Router>
        <div className="app">
          <Connexion />
          {/*<Switch>
            <Route path="/Inscription" exact component={Inscription} />
            <Route path="/Connexion" component={Connexion} />
            <Route path="/Profil" component={Client} />
          </Switch>*/}
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
