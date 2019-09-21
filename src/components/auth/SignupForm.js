import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

export class SignupForm extends React.Component {
  render() {
    const {
      errors, firstname, lastname, email, address,
      password, passwordConfirmation, onSubmit, onChange, registerError,
    } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          error={errors.firstname}
          label="First Name"
          onChange={onChange}
          value={firstname}
          field="firstname"
        />

        <TextFieldGroup
          error={errors.lastname}
          label="Last Name"
          onChange={onChange}
          value={lastname}
          field="lastname"
        />

        <TextFieldGroup
          error={errors.address}
          label="Address"
          onChange={onChange}
          value={address}
          field="address"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={onChange}
          value={email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={onChange}
          value={password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={onChange}
          value={passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />
        { registerError && <p className="alert alert-danger">{registerError}</p>}
        <div className="form-group">
          <button className="btn blue-btn">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
