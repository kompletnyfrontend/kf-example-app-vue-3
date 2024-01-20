export interface Post {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  thumbnail: string;
  description: string;
  short_description: string;
  content: string;
  views: number;
  category_name: number;
}

export interface PostSummary {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
}

export interface Posts {
  posts: PostSummary[];
  total: number;
}
