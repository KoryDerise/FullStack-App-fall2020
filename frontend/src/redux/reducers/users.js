import { USERS_LOGGING_IN, USERS_LOGGED_IN, USERS_REGISTERING, USERS_REGISTERED } from '../actions/actionConstants';

const initialState = {
  jwt: '',
  userId: '',
  pendingLogin: false,
  pendingRegistry: false
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case USERS_LOGGING_IN:
      return { ...state, pendingLogin: true };
    case USERS_LOGGED_IN:
      console.log(action.payload);
      return { ...state, pendingLogin: false, jwt: action.payload.token, userId: action.payload.userId };
    case USERS_REGISTERING:
      return { ...state, pendingRegistry: true };
    case USERS_REGISTERED:
      return { ...state, pendingRegistry: false };
    default:
      return state;
  }
};

export default usersReducer;