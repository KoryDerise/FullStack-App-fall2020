import axios from 'axios';

const url = 'https://cryptic-woodland-11244.herokuapp.com';


export const postLoginUser = async (user) => await axios.post(`${url}/login`, user);
export const postRegisterUser = async (user) => await axios.post(`${url}/register`, user);
