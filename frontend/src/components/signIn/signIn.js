import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

import './signIn.css';

const SignIn = () => {
  const [usernameInput, setUsernameInput] = useState(''); 
  const [passwordInput, setPasswordInput] = useState(''); 

  const jwt = useSelector(state => state.user.jwt);

  const dispatch = useDispatch();

  const handleSignIn = (e, userData) => {
    e.preventDefault();

    if (!userData.username) return;
    if (!userData.password) return;

    dispatch(loginUser(userData));
  }

  return jwt ? (<Redirect to='/tasks' />) : ( 
    <form className="sign-in">
      
      <div className="sign-in__title">
        Sign in
      </div>

      <div className="sign-in__saml">
      </div>

      <div className="sign-in__form">
        <input 
          className="sign-in__form-input" 
          type="text" 
          placeholder="Username" 
          value={ usernameInput }
          onChange={ e => setUsernameInput(e.target.value) }
        />
        <input 
          className="sign-in__form-input" 
          type="password" 
          placeholder="Password"
          autoComplete="on"
          value={ passwordInput }
          onChange={ e => setPasswordInput(e.target.value) }
        />
        <div className="sign-in__forgot-password">
          Forgot your password?
        </div>
        <input 
          className="sign-in__form-button" 
          type="submit" 
          value="SIGN IN" 
          onClick={ (e) => handleSignIn(e, { username: usernameInput, password: passwordInput }) } 
        />
      </div>
    </form>
  );
};

export default SignIn;