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
