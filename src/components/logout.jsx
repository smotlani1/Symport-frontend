import React, { Component } from "react";
import { logout } from "../services/authService";

class Logout extends React.Component {
  componentDidMount() {
    logout();

    window.location = '/login'
  }

  render() {
    return null;
  }
}

export default Logout;
