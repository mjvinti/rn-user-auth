import axios from 'axios';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`;

  return await axios.post(url, {
    email,
    password,
    returnSecureToken: true
  });
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}
