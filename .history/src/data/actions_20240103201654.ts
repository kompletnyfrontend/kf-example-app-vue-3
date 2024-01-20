import { Post, Posts } from "./model/post.model";
import { Form } from "./model/form.model";

export type getPost = (id: Post["id"]) => Promise<Post>;
export type getPosts = () => Promise<Posts>;
export type sendForm = (form: Form) => Promise<void>;
