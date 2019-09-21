import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (data.email === '') {
    errors.email = 'Email is required';
  } else if (emailRegex.test(data.email) === false) {
    errors.email = 'Email is invalid';
  }

  if (data.password === '') {
    errors.password = 'Password is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
