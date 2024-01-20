import httpClient from "../httpClient";

export default {
  getPost(id: Post["id"]]) {
    return httpClient.get(`/posts/${id}`);
  },
};
