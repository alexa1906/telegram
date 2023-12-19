import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import '../components/css/loginForm.css'; 
import { useNavigate } from 'react-router-dom';

interface ErrorResponse {
  message: string[];
  error: string;
  statusCode: number;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
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
    
      console.log('Login Response:', response.data); // Check the entire response object
    
      const token = response.data; // Assuming the token is directly returned as a string
    
      if (token) {
        localStorage.setItem('jwtToken', token); // Storing the token in local storage
        console.log('Token:', token); // Check the extracted token value
    
        // Include the token in headers for subsequent requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
        console.log('Logged in:', response.data);
        // Redirect to chat page after successful login
        navigate('/mainpage');
      } else {
        console.error('Token is undefined or missing in the response');
        // Handle the case where the token is not present in the response
      }
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
    </div>
  );
};

export default LoginForm;
