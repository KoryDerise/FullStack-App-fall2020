import axios from 'axios';

const url = "http://localhost:5000";

export const postLoginUser = async (user) => await axios.post(`${url}/login`, user);
export const postRegisterUser = async (user) => await axios.post(`${url}/register`, user);

