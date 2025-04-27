import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { Comment as CommentModel } from '../../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'http://localhost:5001/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  addPost(post: Omit<Post, 'id' | 'comments'>): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  deletePost(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }

  addComment(
    postId: string,
    comment: Omit<CommentModel, 'id'>
  ): Observable<{ message: string; comment: CommentModel }> {
    return this.http.post<{ message: string; comment: CommentModel }>(
      `${this.baseUrl}/${postId}/comments`,
      comment
    );
  }

  deleteComment(commentId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/comments/${commentId}`
    );
  }
}
