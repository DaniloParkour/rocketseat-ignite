import axios from 'axios';

//Create an axios instance to set default values like BASE_URL
export const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
  //headers, httpAgent, ...
  
})
