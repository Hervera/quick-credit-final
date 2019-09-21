import isEmpty from 'lodash/isEmpty';
import {
  SET_CURRENT_USER, SET_LOGIN_ERROR, SET_SIGNUP_ERROR, SET_SIGNUP_SUCCESS,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loginError: null,
  signupSuccess: false,
  signupError: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError,
      };
    case SET_SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: action.signupSuccess,
      };
    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.signupError,
      };
    default: return state;
  }
};
