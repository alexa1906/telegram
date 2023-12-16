import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import '../components/css/loginForm.css'; 

interface ErrorResponse {
  message: string[];
  error: string;
  statusCode: number;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email: email,
        username: username,
        password: password,
      });

      console.log('Logged in:', response.data);
      // Handle successful login
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>; // Specify the error response type
        if (axiosError.response?.status === 400) {
          const { message } = axiosError.response.data;
          console.error('Login failed with status 400:', message);
          setErrorMessage(message);
        } else {
          console.error('Other error during login:', axiosError.response?.data);
        }
      } else {
        console.error('Unexpected error during login:', error);
      }
    }
  };
  return (
    <div className="font-primary max-w-[720px] mx-auto flex flex-col items-center">
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
        <button type="submit">Login</button>
      </form>
      <p className="text-sm text-gray-600">
        Don't have an account? Sign up <a href="src\components\SignUpForm.tsx">here</a>.
      </p>
    </div>
  );
};

export default LoginForm;
