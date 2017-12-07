import { Component } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})


export class RegistrationComponent {

  fields = [];
  users = [];
  user = {};

  constructor(public userService: UserService) {
    this.userService.getRegistrationShape().subscribe(shape => {
      this.fields = shape;
    });

    this.userService.getUsers().subscribe(shape => {
      this.users = shape;
    });
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(user => {
      this.users.unshift(user);
      localStorage.setItem('userId', user.id);
    });
  }


}
