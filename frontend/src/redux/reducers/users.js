import { 
  USERS_LOGGING_IN, 
  USERS_LOGGED_IN, 
  USERS_REGISTERING, 
  USERS_REGISTERED,
  LOGIN_ERROR,
  REGISTER_ERROR 
} from '../actions/actionConstants';

const initialState = {
  jwt: '',
  userId: '',
  pendingLogin: false,
  pendingRegistry: false,
  loginError: '',
  registerError: ''
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case USERS_LOGGING_IN:
      return { ...state, pendingLogin: true };
    case USERS_LOGGED_IN:
      console.log(action.payload);
      return { ...state, pendingLogin: false, jwt: action.payload.token, userId: action.payload.userId };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case USERS_REGISTERING:
      return { ...state, pendingRegistry: true };
    case USERS_REGISTERED:
      return { ...state, pendingRegistry: false, userId: action.payload.userId, jwt: action.payload.jwt };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    default:
      return state;
  }
};

export default usersReducer;