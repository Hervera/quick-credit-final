import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from './Dropdown.jsx';
import { logout } from '../../actions/authActions';

class ClientNavbar extends Component {
  logout = (e) => {
    e.preventDefault();
    const { logout: logoutAction } = this.props;
    logoutAction();
  }

  render() {
    const firstName = localStorage.getItem('firstName');
    return (
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
                <div className="account-link">
                  <img className="circle profile-pic" src="/public/images/default-avatar.png" alt="user" />
                  <span className="username">
                    <span className="usernm">{firstName}</span>
                    <Dropdown
                      logout={this.logout}
                    />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  login: state.auth,
});

export default connect(mapStateToProps, { logout })(ClientNavbar);
