import React from 'react';
import logo from '../mlody-senior.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src={logo}
        alt="logo"
      />
      <h1>Młodzi seniorzy</h1>
    </nav>
  );
};

export default Navbar;
