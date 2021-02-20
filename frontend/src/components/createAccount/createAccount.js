import React, { useState } from 'react';
import './createAccount.css';

import { useDispatch } from 'react-redux';

import { registerUser } from '../../redux/actions/userActions';

const CreateAccount = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (user) => {
    dispatch(registerUser(user));
  }

  const createUserObj = () => ({ 
    username: usernameInput,
    email: emailInput,
    password: passwordInput
});

  return ( 
    <form className="create-account">
      <div className="create-account__title">
        Create Account
      </div>

      <div className="create-account__saml">
      </div>
      <div className="create-account__text-block">
        or use your email for registration
      </div>
      <div className="create-account__form">
        <input 
          className="create-account__form-input" 
          type="text" 
          placeholder="Username" 
          value={ usernameInput }
          onChange={ e => setUsernameInput(e.target.value) }
        />
        <input 
          className="create-account__form-input" 
          type="email" 
          placeholder="Email"
          value={ emailInput }
          onChange={ e => setEmailInput(e.target.value) }
        />
        <input 
          className="create-account__form-input" 
          type="password" 
          placeholder="Password"
          autoComplete="on"
          value={ passwordInput }
          onChange={ e => setPasswordInput(e.target.value) }
        />
        <input 
          className="create-account__form-button" 
          type="button" 
          value="SIGN UP" 
          onClick={ () => handleRegister(createUserObj()) }
        />
      </div>
    </form>
  );
}

export default CreateAccount;