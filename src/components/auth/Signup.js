/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import SignupForm from './SignupForm';

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
              <SignupForm
                userSignupRequest={userSignupRequest}
                addFlashMessage={addFlashMessage}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};


export default connect(null, { userSignupRequest, addFlashMessage })(Signup);
