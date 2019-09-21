import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {
  SET_CURRENT_USER, SET_LOGIN_ERROR, SET_SIGNUP_SUCCESS, SET_SIGNUP_ERROR,
} from './types';

toast.configure();

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError,
  };
}

export function setSignupSuccess(signupSuccess) {
  return {
    type: SET_SIGNUP_SUCCESS,
    signupSuccess,
  };
}

export function setSignUpError(signupError) {
  return {
    type: SET_SIGNUP_ERROR,
    signupError,
  };
}

export const logout = () => (dispatch) => {
  localStorage.clear();
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
  window.history.pushState({ title: 'Quick Credit' }, 'Quick Credit', '/');
  window.location.reload(true);
};

export const login = (email, password) => async (dispatch) => {
  try {
    const data = { email, password };
    const userData = await axios.post('https://hervera-quick-credit.herokuapp.com/api/v2/auth/signin', data);
    const { token, firstName, lastName } = userData.data.user;
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwtDecode(token)));
  } catch (error) {
    let errorMessage = null;
    if (error.response) {
      errorMessage = error.response.data.error;
    } else {
      errorMessage = 'Something went wrong. Check your internet connection.';
    }
    dispatch(setLoginError(errorMessage));
  }
};

export const userSignupRequest = userData => async (dispatch) => {
  try {
    await axios.post('https://hervera-quick-credit.herokuapp.com/api/v2/auth/signup', {
      firstname: userData.firstname,
      lastname: userData.lastname,
      address: userData.address,
      email: userData.email,
      password: userData.password,
    });
    toast.success('Successfull registered');
    dispatch(setSignupSuccess(true));
  } catch (error) {
    let errorMessage = null;
    if (error.response) {
      errorMessage = error.response.data.error;
    } else {
      errorMessage = 'Something went wrong. Check your internet connection.';
    }
    dispatch(setSignUpError(errorMessage));
  }
};
