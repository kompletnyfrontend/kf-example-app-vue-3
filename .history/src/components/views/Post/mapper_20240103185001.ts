import { Post } from "@/data/model/post.model";
import { UiPost } from "./props";

export const mapPostToUiPost = (post: Post): UiPost => ({
  id: post.id,
  title: post.title,
  thumbnail: post.thumbnail,
  shortDescription: post.short_description,
  description: post.description,
  content: post.content,
  views: post.views,
  categoryName: post.category_name,
  createdAt: post.created_at,
  updatedAt: post.updated_at,
});
