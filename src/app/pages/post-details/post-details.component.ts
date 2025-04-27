import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts-services/posts-services.component';
import { Post } from '../../models/post.model';
import { Comment as CommentModel } from '../../models/comment.model';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../../components/comment-form/comment-form.component';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
  post: Post | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.fetchPost(id);
      }
    });
  }

  fetchPost(id: string) {
    this.postsService.getPostById(id).subscribe({
      next: (post) => {
        this.post = post;
        this.loading = false;
      },
      error: () => {
        this.error = 'Post not found!';
        this.loading = false;
      },
    });
  }

  onAddComment(comment: Omit<CommentModel, 'id'>) {
    if (!this.post) return;

    this.postsService.addComment(this.post.id, comment).subscribe({
      next: (res) => {
        this.post?.comments.unshift(res.comment);
      },
    });
  }
}
