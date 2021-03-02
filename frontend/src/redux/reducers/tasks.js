import { 
  TASKS_CREATING, 
  TASKS_CREATED, 
  TASKS_UPDATING, 
  TASKS_UPDATED, 
  TASKS_DELETING, 
  TASKS_DELETED, 
  TASKS_GETTING,
  TASKS_GETTED 
} from '../actions/actionConstants';

const initialState = {
  creatingTask: false,
  updatingTask: false,
  deletingTask: false,
  gettingTasks: false,
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {

    case TASKS_CREATING:
      return { ...state, creatingTask: true };
    case TASKS_CREATED:
      console.log(action.payload);
      return {...state, tasks: [...action.payload], creatingTask: false };

    case TASKS_UPDATING:
      return { ...state, updatingTask: true };
    case TASKS_UPDATED:
      console.log(action.payload);
      return { ...state, tasks: [...action.payload], updatingTask: false};

    case TASKS_DELETING:
      return { ...state, deletingTask: true };
    case TASKS_DELETED:
      console.log(action.payload);
      return {...state, tasks: [...action.payload], deletingTask: false};

    case TASKS_GETTING:
      return { ...state, gettingTasks: true };
    case TASKS_GETTED:
      console.log(action.payload);
      return { ...state, tasks: [...action.payload], gettingTasks: false };

    default:
      return state;
  }
};

export default tasksReducer;