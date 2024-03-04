import axios, { Axios, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://amiiboapi.com/api/amiibo/',
  timeout: 3000,
}

export default axios.create(axiosConfig);