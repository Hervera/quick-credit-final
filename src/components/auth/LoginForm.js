/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../middleware/validations/login';
import { login } from '../../actions/authActions';
import history from '../../helpers/history';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { login: loginAction } = this.props;
      loginAction(this.state).then(
        (res) => { window.location.href = '/loans'; },
        err => this.setState({ errors: err.response.data.errors, isLoading: false }),
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      errors, email, password, isLoading,
    } = this.state;

    return (
      <form id="loginForm" onSubmit={this.onSubmit}>
        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <TextFieldGroup
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <button className="btn green-btn" disabled={isLoading} type="submit">Login</button>
      </form>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginForm);
