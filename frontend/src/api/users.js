import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postLoginUser = async (user) => await axios.post(`${url}/login`, user);
export const postRegisterUser = async (user) => await axios.post(`${url}/register`, user);
