import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //you can use properties and methods in the HTML instead of the navControl
  usersPage = UsersPage;

  constructor(private navCtrl: NavController){}

  onGoToUsers(){
   this.navCtrl.push(this.usersPage)
   .catch((error) => console.log("Access denied", + error));
  }

}
