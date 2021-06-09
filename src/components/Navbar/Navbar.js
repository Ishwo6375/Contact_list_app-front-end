import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function NavBar() {
  return (
    <nav className="nav-bar">
       <h3 className="nav-heading">Amazon Employee Details</h3>
      <NavLink className="nav-items" exact to="/">Home</NavLink>
      <NavLink className="nav-items" exact to="/about">About</NavLink>
      <NavLink className="nav-items" exact to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavBar;