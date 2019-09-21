/* eslint-disable  */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validateInput from '../../middleware/validations/login';
import { login } from '../../actions/authActions';
import { LoginForm } from './LoginForm';
import '../../css/styles.css';
import '../../css/responsive.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = '/loans';
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errors: {}});
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      const { email, password } = this.state;
      const { login: loginAction } = this.props;
      loginAction(email, password);
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
      errors, email, password,
    } = this.state;
    const { loginError } = this.props;

    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/loans" />;
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
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
              <LoginForm
                errors={errors}
                email={email}
                password={password}
                loginError={loginError}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  loginError: state.auth.loginError,
});

export const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
