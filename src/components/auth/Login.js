import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/styles.css';
import '../../css/responsive.css';
import LoginForm from './LoginForm';

class Login extends React.Component {
  componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = '/loans';
    }
  }

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
              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
Login.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Login);
