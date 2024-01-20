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

export const getPosts = async (): Promise<Post> => {
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
