import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loads from "./components/loads";
import NavBar from "./components/navBar";
import LoadDetails from "./components/loadDetails";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/loads/:id" component={LoadDetails} />
            <Route path="/loads" component={Loads} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
