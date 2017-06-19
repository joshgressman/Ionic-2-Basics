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

  //Lifecycle hooks

  //fired when a new comp is loaded and is authorizrd / true
  //Can be used for auth
  ionViewCanEnter(): boolean | Promise<void>{
   console.log('ionViewCanEnter');
   const rnd = Math.random();
   return rnd > 0.1;
  }

  // executes when loaded
  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  //executed before we see the view
  ionViewWillEnter(){
    console.log("ionViewWillEnter")
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  // ionViewCanLeave(): boolean | Promise<void> {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //       }, 1000
  //     );
  //   });
  //   return promise;
  // }


}
