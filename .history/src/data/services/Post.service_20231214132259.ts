import httpClient from "../httpClient";
import { Post } from "../model/post.model";

const ENDPOINT = "/posts";

export default {
  getPost(id: Post["id"]) {
    return httpClient.get(`${ENDPOINT}/${id}`);
  },
  getPosts() {
    return httpClient.get(`${ENDPOINT}`);
  },
};
