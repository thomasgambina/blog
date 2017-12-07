import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import endpoints from 'app/config/endpoints';

@Injectable()
export class PostsService {

  constructor(public http: Http) {

  }

  getPosts() {
    return this.http.get(endpoints.posts)
      .map(res => res.json());

  }

  postPosts(post) {
    return this.http.post(endpoints.posts, post)
      .map(res => res.json());
  }

}
