import { USERS_LOGGING_IN, USERS_LOGGED_IN, USERS_REGISTERING, USERS_REGISTERED } from './actionConstants';

export const registerUser = (username, password) => async dispatch => {
  dispatch({ type: USERS_REGISTERING, payload: { username: username, password: password } });
  try {
    // API LOGIC
    // CONCLUSION DISPATCH
  } catch (error) {
    console.error(error);
  };
};