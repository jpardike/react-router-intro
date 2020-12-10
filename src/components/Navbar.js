import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  console.log('Username ------------------>', props.username);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      {props.username && (
        <span>Hello, {props.username}</span>
      )}
    </nav>
  )
}

export default Navbar;