import httpClient from "../httpClient";
import Post from "../model/post.model";

export default {
  getPost(id: Post["id"]) {
    return httpClient.get(`/posts/${id}`);
  },
};
