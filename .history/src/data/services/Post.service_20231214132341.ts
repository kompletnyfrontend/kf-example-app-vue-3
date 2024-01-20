import httpClient from "../httpClient";
import { Post } from "../model/post.model";

const ENDPOINT = "/posts";

export default {
  getPost(id: Post["id"]): Promise<Post> {
    return httpClient.get(`${ENDPOINT}/${id}`);
  },
  getPosts(): Promise<Post[]> {
    return httpClient.get(`${ENDPOINT}`);
  },
};
