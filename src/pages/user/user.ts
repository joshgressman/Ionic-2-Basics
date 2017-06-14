import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

   name: string;

  constructor(private navParams: NavParams, private navCtrl: NavController){
    //takes in the navParamters from the users component
    this.name = navParams.get("username");
  }

  onGoBack(){
    this.navCtrl.pop();
  }

}
