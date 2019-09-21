import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import store from './store/index';
import Routers from './routes/routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';


if (localStorage.getItem('jwtToken')) {
  setAuthorizationToken(localStorage.getItem('jwtToken'));
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('jwtToken'))));
}

render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root'),
);
