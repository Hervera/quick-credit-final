import React from 'react';
import { shallow } from '../../setup/enzyme';
import { SignupForm } from '../../../components/auth/SignupForm';

describe('<Signup />', () => {
  let wrapper;

  const props = {
    userSignupRequest: jest.fn(),
    addFlashMessage: jest.fn(),
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
    invalid: false,
  };

  beforeEach(() => {
    wrapper = shallow(<SignupForm {...props} />);
  });

  it('should render Login component', () => {
    wrapper = shallow(<SignupForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two <TextFieldGroup /> elements', () => {
    expect(wrapper.find('TextFieldGroup')).toHaveLength(6);
  });
});
