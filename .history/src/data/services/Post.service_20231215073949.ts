import httpClient from "../httpClient";
import { Post, Posts } from "../model/post.model";

const RESOURCE = "/posts";

export const PostService = {
  getPost(id: Post["id"]) {
    return httpClient.get(`${RESOURCE}/${id}`);
  },
  getPosts() {
    return httpClient.get(`${RESOURCE}`);
  },
};

const getPosts = async (): Promise<Post> => {
  try {
    const response = await PostService.getPosts();

    if (!response.data) throw new Error("No data");

    return {
      id: response.data?.id ?? throw new Error("No id"),
      title: response.data?.title,
      created_at: response.data?.created_at,
      updated_at: response.data?.updated_at,
      thumbnail: response.data?.thumbnail,
      description: response.data?.description,
      short_description: response.data?.short_description,
      content: response.data?.content,
      views: response.data?.views,
      category_name: response.data?.category_name,
    };
  } catch (e) {
    throw new Error(`Error while fetching posts ${e}`);
  }
};
