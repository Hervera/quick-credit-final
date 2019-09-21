/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/dropdown.css';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };
  }

  showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="menu-dropdown">
        <div className="user-caret" onClick={this.showDropdownMenu} onKeyDown={this.handleClick}>
          <span className="fa fa-caret-down" />
        </div>

        { this.state.displayMenu ? (
          <ul onMouseLeave={this.hideDropdownMenu}>
            <li>
              <Link to="/">
                <i className="fa fa-user" />
                {' '}
                Profile
              </Link>
            </li>
            <hr />
            <li>
              <button type="button" onClick={logout} className="signout">
                <i className="fa fa-sign-out" />
                {' '}
              Sign out
              </button>
            </li>
          </ul>
        )
          : (
            null
          )}

      </div>

    );
  }
}

export default Dropdown;
