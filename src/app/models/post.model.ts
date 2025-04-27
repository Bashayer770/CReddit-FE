import { Comment } from '../models/comment.model';

export interface Post {
  id: string;
  title: string;
  description: string;
  comments: Comment[];
}
