import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'https://mintae-backend.herokuapp.com/',
    timeout: 50000,
  });