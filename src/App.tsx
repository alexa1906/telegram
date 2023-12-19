import React from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App: React.FC = () => {
//   return (
//     <LoginPage />
//     // <SignUpPage />
//     // <MainPage />
//   );
// }

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
