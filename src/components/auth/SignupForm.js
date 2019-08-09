import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validateInput from '../../middleware/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { userSignupRequest } from '../../actions/signupActions';

class SignupForm extends React.Component {
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
      isLoading: false,
      invalid: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { userSignupRequest: SignupRequest } = this.props;
      SignupRequest(this.state).then(
        () => {
          const { addFlashMessage } = this.props;
          addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!',
          });
          window.location.href = '/loans';
        },
        err => this.setState({ errors: err.response.data, isLoading: false }),
      );
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
      password, passwordConfirmation, isLoading, invalid,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <TextFieldGroup
          error={errors.firstname}
          label="First Name"
          onChange={this.onChange}
          value={firstname}
          field="firstname"
        />

        <TextFieldGroup
          error={errors.lastname}
          label="Last Name"
          onChange={this.onChange}
          value={lastname}
          field="lastname"
        />

        <TextFieldGroup
          error={errors.address}
          label="Address"
          onChange={this.onChange}
          value={address}
          field="address"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={isLoading || invalid} className="btn blue-btn">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest })(SignupForm);
