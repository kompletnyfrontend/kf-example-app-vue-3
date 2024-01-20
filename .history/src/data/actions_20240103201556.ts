import { Post, Posts } from "./types";

export type getPost = (id: Post["id"]) => Promise<Post>;
export type getPosts = () => Promise<Posts>;
export type sendForm = (form: Form) => Promise<void>;
