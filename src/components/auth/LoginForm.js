import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

export class LoginForm extends React.Component {
  render() {
    const {
      errors, email, password, onSubmit, onChange, loginError,
    } = this.props;

    return (
      <form id="loginForm" onSubmit={onSubmit}>
        { loginError && <p className="alert alert-danger">{loginError}</p>}
        <TextFieldGroup
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={onChange}
          type="password"
        />

        <button className="btn green-btn" type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
