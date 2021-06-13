import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div>
        <h3 className="nav-heading">Amazon Employee Details</h3>
        <NavLink className="nav-items" to="/">
          Home
        </NavLink>
        <NavLink className="nav-items" to="/about">
          About
        </NavLink>
        <NavLink className="nav-items" to="/contact">
          Contact
        </NavLink>
      </div>

      <Link className="btn btn-primary mx-3" to="/UserForm/add">
        New Hire
      </Link>
    </nav>
  );
}

export default NavBar;
