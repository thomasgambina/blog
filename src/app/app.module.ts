import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkComponent } from './components/header/navigation/parts/link-nav.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from 'app/components/posts/posts.component';
import { AddComponent } from 'app/components/posts/add/add.component';
import { UserService } from './services/user.service';
import { PostsService } from './services/posts.service';

import routes from 'app/config/routes';


@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    NavigationComponent,
    RegistrationComponent,
    UsersComponent,
    PostsComponent,
    AddComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UserService,
    PostsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
