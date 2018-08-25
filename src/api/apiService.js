import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9001/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const apiService = {
  get(endpoint) {
    return axios.get(endpoint);
  },
  post(endpoint, data) {
    return axios.post(endpoint, data);
  },
  put(endpoint, data) {
    return axios.put(endpoint, data);
  },
  delete(endpoint) {
    return axios.delete(endpoint);
  },
};

export default apiService;
