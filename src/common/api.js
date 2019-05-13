import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'f08c5ade712b0f870c7afad269bffbcb';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });