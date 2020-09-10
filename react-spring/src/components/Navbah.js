import React from "react";
import { NavLink } from "react-router-dom";

const Navbah = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <span className="navbar-brand mb-0 h1">Project Portfolio</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink
            exact
            to="/"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageOne
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageTwo
          </NavLink>
          <NavLink
            exact
            to="/projects"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageThree
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageFour
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbah;
