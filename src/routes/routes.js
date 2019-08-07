import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import account from '../components/client/account';
import createLoan from '../components/client/createLoan';

class Routes extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <BrowserRouter>
              <div className="App">
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Signup} />
                  <Route path="/account" component={account} />
                  <Route path="/loans" component={createLoan} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Routes;
