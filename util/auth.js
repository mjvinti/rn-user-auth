import axios from 'axios';

export async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.EXPO_PUBLIC_API_KEY}`,
    { email, password, returnSecureToken: true }
  );
}
