import React from 'react';
import SignUpForm from '../components/SignUpForm';
import '../pages/css/singUpPage.css'; 
import telgramImg from '/telegram_logo.png';

const singUpPage: React.FC = () => {
    return (
        <div>
          <div className="image-container">
            <img src={telgramImg} alt="Image Description" />
          </div>
          <div className="login-page">
            <main>
              <h1>Sign Up</h1>
              <SignUpForm />
            </main>
            {/* Add Footer or other components as needed */}
          </div>
        </div>
      );
}

export default singUpPage;