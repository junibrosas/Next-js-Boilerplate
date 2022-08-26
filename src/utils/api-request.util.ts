import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export const fetcher = (params: AxiosRequestConfig) => {
  return axios({
    baseURL: '/api/',
    ...params,
  }).then((res) => res.data);
};
