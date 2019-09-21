import validateInput from '../../../middleware/validations/signup';


describe('Login frontend validation', () => {
  it('Should return errors when firstname is empty', () => {
    const data = {
      firstname: '', lastname: 'levy', address: 'kigali', email: 'dana@gmail.com', password: '@Dggadee245', passwordConfirmation: '@Dggadee245',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        firstname: 'Firstname is required',
      },
      isValid: false,
    });
  });
  it('Should return errors when lastname is empty', () => {
    const data = {
      firstname: 'Dana', lastname: '', address: 'kigali', email: 'dana@gmail.com', password: '@Dggadee245', passwordConfirmation: '@Dggadee245',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        lastname: 'Lastname is required',
      },
      isValid: false,
    });
  });

  it('Should return errors when address is empty', () => {
    const data = {
      firstname: 'Dana', lastname: 'levy', address: '', email: 'dana@gmail.com', password: '@Dggadee245', passwordConfirmation: '@Dggadee245',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        address: 'Address is required',
      },
      isValid: false,
    });
  });

  it('Should return errors when email is empty', () => {
    const data = {
      firstname: 'Dana', lastname: 'levy', address: 'kigali', email: '', password: '@Dggadee245', passwordConfirmation: '@Dggadee245',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        email: 'Email is required',
      },
      isValid: false,
    });
  });

  it('Should return errors when email is invalid', () => {
    const data = {
      firstname: 'Dana', lastname: 'levy', address: 'kigali', email: 'hello', password: '@Dggadee245', passwordConfirmation: '@Dggadee245',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        email: 'Email is invalid',
      },
      isValid: false,
    });
  });

  it('Should return errors when password is empty', () => {
    const data = {
      firstname: 'Dana', lastname: 'levy', address: 'kigali', email: 'dana@gmail.com', password: '', passwordConfirmation: '',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        password: 'Password is required',
        passwordConfirmation: 'Confirm Password is required',
      },
      isValid: false,
    });
  });

  it('Should return errors when password is empty', () => {
    const data = {
      firstname: 'Dana', lastname: 'levy', address: 'kigali', email: 'dana@gmail.com', password: '@Dmnmnbm', passwordConfirmation: 'nbmnbm',
    };
    const response = validateInput(data);
    expect(response).toEqual({
      errors: {
        passwordConfirmation: 'Passwords must match',
      },
      isValid: false,
    });
  });
});
