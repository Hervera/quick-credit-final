import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component }) => (
  <Route
    render={props => (localStorage.getItem('jwtToken')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login' }} />
    )}
  />
);
