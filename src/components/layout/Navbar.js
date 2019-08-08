import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="nav">
      <div className="logo">
        <h2>
          <Link to="/">QuickCredit</Link>
        </h2>
      </div>
      <div className="menu">
        <ul className="auth-list">
          <li>
            <Link to="/login" className="btn green-btn">Login</Link>
          </li>
          <li>
            <Link to="/register" className="btn blue-btn">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Navbar;
