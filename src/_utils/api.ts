import axios, { AxiosRequestConfig } from "axios";

axios.defaults.withCredentials = true;

const BASE_URL = `${process.env.REACT_APP_BASE_URL}life`;

const api = {
  get: (url: string, config?: AxiosRequestConfig) => {
    return axios.get(`${BASE_URL}/${url}`, config);
  },
  post: (url: string, payload: any) => {
    return axios.post(`${BASE_URL}/${url}`, payload);
  },
  patch: (url: string, payload: any) => {
    return axios.patch(`${BASE_URL}/${url}`, payload);
  },
  delete: (url: string) => {
    return axios.delete(`${BASE_URL}/${url}`);
  },
};

export default api;