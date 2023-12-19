import React from 'react';
// import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import '../pages/css/loginPage.css'; 
import telgramImg from '/telegram_logo.png';

const LoginPage: React.FC = () => {
    return (
        <div>
          <div className="image-container">
            <img src={telgramImg} alt="Image Description" />
          </div>
          <div className="login-page">
            <main>
              <h1>Login</h1>
              <LoginForm />
            </main>
          </div>
        </div>
      );
}

export default LoginPage;