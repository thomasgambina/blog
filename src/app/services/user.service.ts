import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import endpoints from 'app/config/endpoints';

@Injectable()
export class UserService {

  constructor(public http: Http) {

  }

  data = [];

  extractKeys = (obj, prefix = 'user') => {
    Object.keys(obj).forEach(key => {
      (typeof obj[key] === 'object') ? this.extractKeys(obj[key], `${prefix}.${key}`) :
        this.data.push({'fieldName': `${prefix}.${key}`, placeholder: key.split('.').pop(), 'regex':
          key === 'email'
            ?
            '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'
            :
            '\'^[a-z0-9_-]{3,16}$\'' });
    });
    return this.data;
  }

  getRegistrationShape() {
    return this.http.get(endpoints.users)
      .map(res => this.extractKeys(res.json()[0]));

  }

  getUsers() {
    return this.http.get(endpoints.users)
      .map(res => res.json());
  }

  addUser(user) {
    return this.http.post(endpoints.users, user)
      .map(res => res.json());
  }

}
