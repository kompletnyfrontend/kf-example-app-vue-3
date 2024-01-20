import httpClient from "../httpClient";
import { Post, Posts } from "../model/post.model";

const RESOURCE = "/posts";

export default {
  getPost(id: Post["id"]): Promise<Post> {
    return httpClient.get(`${RESOURCE}/${id}`);
  },
  getPosts(): Promise<Posts> {
    return httpClient.get(`${RESOURCE}`);
  },
};
