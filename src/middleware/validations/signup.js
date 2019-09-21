import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname is required';
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname is required';
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Confirm Password is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
