import { 
  USERS_LOGGING_IN, 
  USERS_LOGGED_IN, 
  USERS_REGISTERING, 
  USERS_REGISTERED, 
  REGISTER_ERROR, 
  LOGIN_ERROR 
} from './actionConstants';

import { postLoginUser, postRegisterUser } from '../../api/users';

export const loginUser = (user) => async dispatch => {
  dispatch({ type: USERS_LOGGING_IN, payload: user });
  try {
    const response = await postLoginUser(user);
    dispatch({ type: USERS_LOGGED_IN, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_ERROR, payload: error });
  };
};

export const registerUser = (user) => async dispatch => {
  dispatch({ type: USERS_REGISTERING, payload: user });
  try {
    const response = await postRegisterUser(user);
    dispatch({ type: USERS_REGISTERED, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.errorMessage });
  }
};