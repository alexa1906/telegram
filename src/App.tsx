import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <LoginPage />
    // <SignUpPage />
    // <MainPage />
  );
}

export default App;
