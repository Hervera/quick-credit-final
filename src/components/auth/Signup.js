import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="main">
        <section>
          <div className="title-heading message-header">
            <h2>
              Quick Credit is an online lending platform that provides
              short term soft loans to individuals.
            </h2>
          </div>
          <div className="card">
            <div className="card-heading">
              <h3>Register Now</h3>
            </div>
            <div className="card-body">
              <form action="login.html">
                <div className="each-input">
                  <label>First Name</label>
                  <input type="text" name="name" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Last Name</label>
                  <input type="text" name="name" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Email Address</label>
                  <input type="email" name="email" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Address</label>
                  <input type="text" name="address" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Password</label>
                  <input type="password" name="password" className="input-form" />
                </div>
                <div className="each-input">
                  <label>Confirm Password</label>
                  <input type="password" name="confirm-password" className="input-form" />
                </div>
                <button className="btn blue-btn" type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
