import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Symport
      </Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/loads">
            Loads
          </NavLink>
          {!user && (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          )}
          {user && (
            <NavLink className="nav-item nav-link disabled" to="/logout">
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
