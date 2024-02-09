import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useAuth } from './contexts/AuthContext'; // Assuming this hook provides user and auth status
import { AuthProvider } from './contexts/AuthContext';
import { Homepage } from './homepage/homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  // const { currentUser, userRole } = useAuth(); // Adjust according to your actual auth context

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/homepage"
            element={
               <Homepage />
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
