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
// poprawic tak, zeby mozna dane zwracane byly juz przepuszczone przez validator kontraktu

function testT() {
  let loading = false;
  let error = null;
  let data = null;

  const getPosts = async () => {
    loading = true;
    try {
      data = await new Promise((resolve) =>
        setTimeout(() => resolve("data"), 5000)
      );
    } catch (e) {
      error = e;
    }
    loading = false;
  };

  getPosts();

  return [loading, error, data];
}
