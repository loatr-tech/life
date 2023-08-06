export type PostInteractions = {
  views: number;
  likes: number;
  comments: number;
}

export type Post = {
  _id?: string;
  id?: string;
  meta_data?: any;
  title: string;
  content: string;
  category: string;
  owner: any;
  createdAt: string | Date;
  interactions: PostInteractions;
  tags?: string[],
};