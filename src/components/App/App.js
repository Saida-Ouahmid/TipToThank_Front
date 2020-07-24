/**
 * App.js - Main app component
 */

/*Module imports*/
import React, { Component } from "react";
import Inscription from "../Inscription/Inscription";
import "bootstrap/dist/css/bootstrap.min.css";
import Connexion from "../Connexion/Connexion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*Main app component*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Inscription" exact component={Inscription} />
            <Route path="/Connexion" exact component={Connexion} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
