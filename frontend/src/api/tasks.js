import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postNewTask = async (task, token) => {
  return await axios.post(`${url}/tasks`, task, { headers: { 'auth-token': token } });
};

export const putTask = async (task, token) => await axios.put(`${url}/tasks`, task, { headers: { 'auth-token': token } });

export const deleteTask = async (userId, taskId, token) => {
  // taskId, userId, auth-token: token
  console.log(token);
  return await axios.delete(`${url}/tasks/`, { data: { userId: userId, taskId: taskId  }, headers: { "auth-token": token } });
}

export const postUserTasks = async (userId, token) => {
  return await axios.post(`${url}/tasks/usertasks`, { userId: userId }, { headers: { 'auth-token': token } });
}
