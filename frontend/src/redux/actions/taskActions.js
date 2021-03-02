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

import {
  postNewTask,
  putTask,
  deleteTask,
  postUserTasks
} from '../../api/tasks';

export const createTask = (task, token) => async dispatch => {
  dispatch({ type: TASKS_CREATING, payload: task });
  try {
    const response = await postNewTask(task, token);
    dispatch({ type: TASKS_CREATED, payload: response.data });
  } catch (error) {
    console.error(error);
  };
};

export const updateTask = (task, token) => async dispatch => {
  dispatch({ type: TASKS_UPDATING, payload: task });
  try {
    const response = await putTask(task, token);
    dispatch({ type: TASKS_UPDATED, payload: response.data });
  } catch (error) {
    console.error(error);
  };
};

export const removeTask = (userId, taskId, token) => async dispatch => {
  dispatch({ type: TASKS_DELETING, payload: taskId });
  try {
    const response = await deleteTask(userId, taskId, token);
    dispatch({ type: TASKS_DELETED, payload: response.data });
  } catch (error) {
    console.error(error);
  };
};

export const getTasks = (userId, token) => async dispatch => {
  dispatch({ type: TASKS_GETTING, payload: userId });
  try {
    const response = await postUserTasks(userId, token);
    console.log(response);
    dispatch({ type: TASKS_GETTED, payload: response.data });
  } catch (error) {
    console.error(error);
  };
};