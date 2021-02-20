import React from 'react';
import SignIn from '../../components/signIn/signIn';
import CreateAccount from '../../components/createAccount/createAccount';

import './loginAndRegister.css';

const loginAndRegister = () => {
  return ( 
    <div className="login-and-register__main-container">
      <SignIn />
      <CreateAccount />
    </div>
  );
}

export default loginAndRegister;