import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">&apos;s BookStore</h1>
    <ul>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
