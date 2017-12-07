import { Component, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})


export class AddComponent {

  post = {};
  @Output() postEvent = new EventEmitter();

  constructor(public postsService: PostsService) {

  }

  onSubmit() {
    this.postsService.postPosts(this.post).subscribe(post => {
      this.postEvent.emit(post);
    });
  }

}
