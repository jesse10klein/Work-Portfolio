import React from "react";
import { NavLink } from "react-router-dom";

const Navbah = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg" style={{'backgroundColor': '#424242'}}>
      <span className="navbar-brand mb-0 h1">Jesse Klein</span>
      <div id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink
            exact
            to="/"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/projects"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbah;
