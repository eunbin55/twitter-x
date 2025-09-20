import { User } from "./user";

export interface Post {
  id: number;
  author: User;
  content: string;
  images: string[] | [];
  createdAt: string;
  likes: number;
  retweets: number;
  comments: number;
  isLiked: boolean;
  isRetweeted: boolean;
}
