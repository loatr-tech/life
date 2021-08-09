import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}life`;

const api = {
  get: (url: string) => {
    return axios.get(`${BASE_URL}/${url}`);
  },
  post: (url: string, payload: any) => {
    return axios.post(`${BASE_URL}/${url}`, payload);
  }
}

export default api;