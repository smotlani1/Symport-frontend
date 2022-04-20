import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loads from "./components/loads";
import NavBar from "./components/navBar";
import LoadDetails from "./components/loadDetails";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { getCurrentUser } from "./services/authService";
import Logbook from "./components/logbook";
import LogbookEntry from "./components/logbookEntry";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/loads/:id" component={LoadDetails} />
            <ProtectedRoute path="/loads" component={Loads} />
            <ProtectedRoute path="/logbook/new/" component={LogbookEntry} />
            <ProtectedRoute path="/logbook" component={Logbook} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
