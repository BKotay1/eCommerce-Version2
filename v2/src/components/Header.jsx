import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">
        <img src="/public/images/header-logo.png" alt="Header Logo" className="header-image" />
      </Link>
      <ul className="nav-list">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/product">Come Train</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
