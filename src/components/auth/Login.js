import React from 'react';
import '../../css/styles.css';
import '../../css/responsive.css';

class Login extends React.Component {
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
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
              <form id="loginForm">
                <div className="each-input">
                  <label>Email Address</label>
                  <input type="email" name="email" className="input-form" id="email" required />
                </div>
                <div className="each-input">
                  <label>Password</label>
                  <input type="password" name="password" className="input-form" id="password" required />
                </div>
                <button className="btn green-btn" type="submit">Login</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
