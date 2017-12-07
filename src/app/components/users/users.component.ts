import { Component } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})


export class UsersComponent {

  users = [];

  constructor(public userService: UserService) {
    this.userService.getUsers().subscribe(shape => {
      this.users = shape;
    });
  }


}
