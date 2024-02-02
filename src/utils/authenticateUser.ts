import thunkAPI from '@reduxjs/toolkit';

export async function authenticateUser(
  username: string,
  password: string
): Promise<void> {
  try {
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      // console.log('Authentication successful');
      const data = await response.json(); // Ответ от сервера, если необходимо
      return data;
    } else {
      console.error('Authentication failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Ошибка');
  }
}
