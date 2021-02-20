import { USERS_LOGGING_IN, USERS_LOGGED_IN, USERS_REGISTERING, USERS_REGISTERED } from './actionConstants';
import { postLoginUser, postRegisterUser } from '../../api/users';

export const loginUser = (user) => async dispatch => {
  dispatch({ type: USERS_LOGGING_IN, payload: user });
  try {
    const response = await postLoginUser(user);
    dispatch({ type: USERS_LOGGED_IN, payload: response.data });
  } catch (error) {
    console.error(error);
  };
};

export const registerUser = (user) => async dispatch => {
  dispatch({ type: USERS_REGISTERING, payload: user });
  try {
    const response = await postRegisterUser(user);
    console.log(response);
    dispatch({ type: USERS_REGISTERED, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};