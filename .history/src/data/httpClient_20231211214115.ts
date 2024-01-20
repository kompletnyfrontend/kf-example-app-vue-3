import axios from "axios";

const httpClient = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
};
