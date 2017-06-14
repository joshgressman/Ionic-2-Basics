import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserPage } from '../user/user';

@Component({
selector: 'page-users',
templateUrl: 'users.html'
})

export class UsersPage {

  constructor(private navCtrl: NavController){}

    //will push a new page onto the stack with parameters
    toGoToUser(username: string){
    this.navCtrl.push(UserPage, {username: username});
}

}
