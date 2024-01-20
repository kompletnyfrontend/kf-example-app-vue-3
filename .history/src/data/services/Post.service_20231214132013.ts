import httpClient from "../httpClient";

export default {
  getPost(id: string) {
    return httpClient.get(`/posts/${id}`);
  },
};
