import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/layout/Navbar';
import ClientNavbar from '../components/layout/clientNavbar';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import account from '../components/client/account';
import createLoan from '../components/client/createLoan';
import { PrivateRoute } from './PrivateRoute';

class Routes extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <BrowserRouter>
              <div className="App">
                {this.props.auth.isAuthenticated ? <ClientNavbar /> : <Navbar /> }
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Signup} />
                  <PrivateRoute exact path="/account" component={account} />
                  <PrivateRoute exact path="/loans" component={createLoan} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

Routes.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Routes);
