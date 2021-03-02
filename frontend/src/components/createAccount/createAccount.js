import React, { useState } from 'react';
import './createAccount.css';

import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../redux/actions/userActions';

const CreateAccount = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const error = useSelector(state => state.user.registerError);
  console.log(error);

  const dispatch = useDispatch();

  const handleRegister = (e, user) => {
    e.preventDefault();
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
        <div className="create-account__error-text">
          { error.message }
        </div>
        <input 
          className="create-account__form-button" 
          type="submit" 
          value="SIGN UP" 
          onClick={ (e) => handleRegister(e, createUserObj()) }
        />
      </div>
    </form>
  );
}

export default CreateAccount;