import axios from 'axios';

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`,
    { email, password, returnSecureToken: true }
  );
}
