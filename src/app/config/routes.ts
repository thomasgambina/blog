import { RegistrationComponent } from 'app/components/registration/registration.component';
import { UsersComponent } from 'app/components/users/users.component';
import { PostsComponent } from 'app/components/posts/posts.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    data: {
      title: 'User Registration'
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: {
      title: 'Posts'
    }
  }
];

export default routes;
