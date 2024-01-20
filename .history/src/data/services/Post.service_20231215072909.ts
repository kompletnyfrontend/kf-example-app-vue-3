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

const getPosts = async (): Promise<Post> => {
  try {
    const response = await PostService.getPosts();

    if (!response.data) throw new Error("No data");

    return {
      id: response.data.id,
      title: response.data.title,
      created_at: response.data.created_at,
      updated_at: response.data.updated_at,
      thumbnail: response.data.thumbnail,
      description: response.data.description,
      short_description: response.data.short_description,
      content: response.data.content,
      views: response.data.views,
      category_name: response.data.category_name,
    };
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
