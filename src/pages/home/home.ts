import { Component } from '@angular/core';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //you can use properties and methods in the HTML instead of the navControl
  usersPage = UsersPage;
}
