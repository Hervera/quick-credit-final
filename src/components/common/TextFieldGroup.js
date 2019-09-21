/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({
  field, value, label, error, type, onChange, checkUserExists,
}) => (
  <div className={classnames('each-input', { 'has-error': error })}>
    <label className="control-label">{label}</label>
    <input
      onChange={onChange}
      onBlur={checkUserExists}
      value={value}
      type={type}
      name={field}
      className="input-form"
    />
    {error && <span className="help-block">{error}</span>}
  </div>
);

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  type: 'text',
};

export default TextFieldGroup;
