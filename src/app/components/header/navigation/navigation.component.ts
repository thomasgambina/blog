import { Component } from '@angular/core';
import routes from 'app/config/routes';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})


export class NavigationComponent {

  links: object = routes;

}
