import { Component } from '@angular/core';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { CommonModule } from '@angular/common';

import { PostcardComponent } from '../../components/postcard/postcard.component';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts-services/posts-services.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostcardComponent, PostFormComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
    this.fetchPosts();
  }

  goToPostDetails(id: string) {
    this.router.navigate(['/posts', id]);
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  onPostSubmit(post: { title: string; description: string }) {
    this.postsService.addPost(post).subscribe(() => {
      this.fetchPosts();
    });
  }

  onDeletePost(id: string) {
    this.postsService.deletePost(id).subscribe(() => {
      this.fetchPosts();
    });
  }
}
