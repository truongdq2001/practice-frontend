import axios from 'axios';
const baseUrl = 'http://20.13.37.140:8282/';
const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export default API;
