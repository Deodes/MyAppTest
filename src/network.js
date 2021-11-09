import {API_URL, API_KEY} from 'react-native-dotenv';
import axios from 'axios';

axios.defaults.baseURL = API_URL;
axios.defaults.params = {api_key: API_KEY};

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response.data;
  },
  error => {
    console.log(error);
    return Promise.reject(error.status_message);
  },
);

export default {
  get(path, params) {
    return axios.get(path, {params});
  },
  post(path, body, params) {
    return axios.post(path, body, {params});
  },
  put(path, body, params) {
    return axios.put(path, body, {params});
  },
  delete(path, params) {
    return axios.delete(path, {params});
  },
};
