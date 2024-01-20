import { Post, Posts } from "./model/post.model";

export type getPost = (id: Post["id"]) => Promise<Post>;
export type getPosts = () => Promise<Posts>;
export type sendForm = (form: Form) => Promise<void>;

type Form = { name: string; email: string; message: string };
