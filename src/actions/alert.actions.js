import { alertConstants } from '../constants';

export const alertActions = {
  // eslint-disable-next-line no-use-before-define
  success,
  // eslint-disable-next-line no-use-before-define
  error,
  // eslint-disable-next-line no-use-before-define
  clear,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
