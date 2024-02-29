import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AuthForm from '../../components/layout/AuthForm';
import './login.css';

const Login: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleAuthentication = (username: string, password: string, isLogin: boolean) => {
    console.log(username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
    <div className='container-login'>    
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <AuthForm isAuthenticated={isAuthenticated} onAuthenticate={handleAuthentication} />
      )}
      
    </div>
    <Footer />
    </>
  );
};

export default Login;
