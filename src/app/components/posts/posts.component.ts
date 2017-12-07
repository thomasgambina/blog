import { Component } from '@angular/core';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})


export class PostsComponent {

  posts = [];

  constructor(public postsService: PostsService) {
    this.postsService.getPosts().subscribe(shape => {
      this.posts = shape;
    });
  }

  receivePost($event) {
    this.posts.unshift($event);
  }


}
