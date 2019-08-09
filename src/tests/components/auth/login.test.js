import React from 'react';
import { shallow } from '../../setup/enzyme';
import { LoginForm } from '../../../components/auth/LoginForm';

describe('<Login />', () => {
  let wrapper;

  const props = {
    login: jest.fn(),
    email: '',
    password: '',
    errors: {},
    isLoading: false,
  };

  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
    console.log(wrapper.debug());
  });

  it('should render Login component', () => {
    wrapper = shallow(<LoginForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two <TextFieldGroup /> elements', () => {
    expect(wrapper.find('TextFieldGroup')).toHaveLength(2);
  });

//   it('should submit form if form submit', () => {
//     const spy = jest.spyOn(wrapper.instance(), 'onSubmit');
//     wrapper.instance().forceUpdate();
//     const fakeEvent = { e.preventDefault(): () => { } };
//     const form = wrapper.find('#loginForm');
//     form.simulate('submit', fakeEvent);
//     expect(form.length).toBe(1);
//     expect(spy).toHaveBeenCalled();
//   });
});
