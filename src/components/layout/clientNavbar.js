import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navigation">
    <div className="header">
      <div className="logo with-bars">
        <h2><a href="login.html">Quick Credit</a></h2>
        <div className="tree-bars">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" className="account-link">
              <img className="circle profile-pic" src="/public/images/default-avatar.png" alt="user" />
              <span className="username">
                <span className="usernm">N.Herve</span>
                <i className="caret">&#9660;</i>
              </span>
            </Link>
            <ul className="drop-content" id="right-menu">
              <li><a href="profile.html">My Profile</a></li>
              <hr />
              <li><a href="../login.html">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
