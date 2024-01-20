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

export const getPost = async (): Promise<Post> => {
  try {
    const response = await PostService.getPosts();
    const requiredFields = [
      "id",
      "title",
      "created_at",
      "updated_at",
      "thumbnail",
      "description",
      "short_description",
      "content",
      "views",
      "category_name",
    ];

    if (!response.data) throw new Error("No data");

    requiredFields.forEach((field) => {
      if (!response.data[field]) throw new Error(`No ${field} field`);
    });

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

export const getPosts = async (): Promise<Posts> => {
  try {
    const response = await PostService.getPosts();
    const requiredPostFields = [
      "id",
      "title",
      "created_at",
      "updated_at",
      "thumbnail",
      "description",
      "short_description",
      "content",
      "views",
      "category_name",
    ];

    if (!response.data) throw new Error("No data");
    if (!response.data.posts) throw new Error("No posts");

    return response.data.posts.map((post: Post) => ({
      id: post.id,
      title: post.title,
      created_at: post.created_at,
      updated_at: post.updated_at,
      thumbnail: post.thumbnail,
      description: post.description,
      short_description: post.short_description,
      content: post.content,
      views: post.views,
      category_name: post.category_name,
    }));
  } catch (e) {
    throw new Error(`Error while fetching posts ${e}`);
  }
};
