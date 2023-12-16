import React, { useState } from 'react';
import axios from 'axios';
import '../components/css/signUpForm.css';
import { AxiosError } from 'axios';

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/user/create', {
        email: email,
        username: username,
        password: password
      });
      
      console.log('User registered:', response.data); // Log response from the server

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Registration failed:', axiosError.response?.data);
      } else {
        console.error('Unexpected error during registration:', error);
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;