import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand mb-0 h1" href="/Home">
        <i className="fa fa-graduation-cap" aria-hidden="true" />
        SIKSHYALAYA
      </a>
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
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/About">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Contact">
            Contact
          </NavLink>
          {/* <NavLink className="nav-item nav-link" to="/loginform">
            Log in
          </NavLink>
          <NavLink className="nav-item nav-link" to="/registerform">
            Register
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};
{
  /* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand mb-0 h1" href="/Home">
        <i className="fa fa-graduation-cap" aria-hidden="true" />
        SIKSHYALAYA
      </a>
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
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/About">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Contact">
            Contact
          </NavLink>
          <NavLink className="nav-item nav-link" to="/loginform">
            Log in
          </NavLink>
          <NavLink className="nav-item nav-link" to="/registerform">
            Register
          </NavLink>
        </div>
      </div>
    </nav> */
}
export default NavBar;
