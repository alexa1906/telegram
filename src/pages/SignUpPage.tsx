import React from 'react';
import SignUpForm from '../components/SignUpForm';
import '../pages/css/singUpPage.css'; 
import telgramImg from '/telegram_logo.png';
import { Link } from 'react-router-dom';

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
          </div>
          <p className="text-sm text-gray-600">
        Already have an account?
        <Link to="/loginPage">
          <button
            className="ml-1 text-[#3390ec] capitalize hover:underline"
            type="submit"
          >
            Log In
          </button>
        </Link>
      </p>
        </div>
      );
}

export default singUpPage;