import axios from 'axios';

export function userSignupRequest(userData) {
  return () => axios.post('http://localhost:3000/api/v2/auth/signup', {
    firstname: userData.firstname,
    lastname: userData.lastname,
    address: userData.address,
    email: userData.email,
    password: userData.password,
  }).then((res) => {
    console.log(res.userData);
  }).catch((error) => {
    console.log(error.response.userData);
  });
}
