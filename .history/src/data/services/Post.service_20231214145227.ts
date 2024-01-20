import httpClient from "../httpClient";
import { Post, Posts } from "../model/post.model";

const RESOURCE = "/posts";

export default {
  getPost(id: Post["id"]) {
    return httpClient.get<Post>(`${RESOURCE}/${id}`);
  },
  getPosts() {
    return httpClient.get<Posts>(`${RESOURCE}`);
  },
};
