import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

   name: string;

  constructor(private navParams: NavParams){
    //takes in the navParamters from the users component
    this.name = navParams.get("username");
  }

}
