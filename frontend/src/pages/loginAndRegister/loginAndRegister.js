import React from 'react';
import SignIn from '../../components/signIn/signIn';
import CreateAccount from '../../components/createAccount/createAccount';
import HomeOverlay from '../../components/homeOverlay/homeOverlay';

import './loginAndRegister.css';

const LoginAndRegister = () => {
  return ( 
    <div className="login-and-register__main-container">
      <SignIn />
      <CreateAccount />
      <HomeOverlay />
    </div>
  );
}

export default LoginAndRegister;