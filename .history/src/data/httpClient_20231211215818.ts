import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.EXAMPLE_APP_API_URL,
  headers: {
    authorization: `Bearer ${process.env.EXAMPLE_APP_API_TOKEN}`,
  },
});

export default httpClient;
