/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actions/authActions';
import { SignupForm } from './SignupForm';
import validateInput from '../../middleware/validations/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      invalid: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {} });
      const { userSignupRequest: SignupRequest } = this.props;
      SignupRequest(this.state);
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const {
      errors, firstname, lastname, email, address,
      password, passwordConfirmation,
    } = this.state;

    if (this.props.signupSuccess) {
      return <Redirect to="/login" />;
    }

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
                errors={errors}
                firstname={firstname}
                lastname={lastname}
                email={email}
                address={address}
                password={password}
                passwordConfirmation={passwordConfirmation}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                registerError={this.props.signupError}
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
};

const mapStateToProps = state => ({
  signupError: state.auth.signupError,
  signupSuccess: state.auth.signupSuccess,
});

export default connect(mapStateToProps, { userSignupRequest })(Signup);
