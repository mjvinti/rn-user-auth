import axios from 'axios';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true
  });

  const {
    data: { idToken }
  } = response;
  return idToken;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
