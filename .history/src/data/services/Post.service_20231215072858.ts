import httpClient from "../httpClient";
import { Post, Posts } from "../model/post.model";

const RESOURCE = "/posts";

export const PostService = {
  getPost(id: Post["id"]) {
    return httpClient.get<Post>(`${RESOURCE}/${id}`);
  },
  getPosts() {
    return httpClient.get<Posts>(`${RESOURCE}`);
  },
};

const getPosts = async (): Promise<T> => {
  try {
    const response = await PostService.getPosts();

    if (!response.data) throw new Error("No data");

    return {};
  } catch (e) {
    throw new Error(`Error while fetching posts ${e}`);
  }
};

// poprawic tak, zeby mozna dane zwracane byly juz przepuszczone przez validator kontraktu

// function testT() {
//   let loading = false;
//   let error = null;
//   let data = null;

//   const getPosts = async () => {
//     loading = true;
//     try {
//       data = await new Promise((resolve) =>
//         setTimeout(() => resolve("data"), 5000)
//       );
//     } catch (e) {
//       error = e;
//     }
//     loading = false;
//   };

//   getPosts();

//   return [loading, error, data];
// }

// const [loading, error, data] = testT();
// console.log(loading, error, data);
// setTimeout(() => console.log(loading, error, data), 6000);
