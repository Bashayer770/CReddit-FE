import { Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':id',
        component: PostDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/posts',
  },
];
