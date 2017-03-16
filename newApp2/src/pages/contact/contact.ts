import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  date:Date =new Date('2017-03-08 10:09:10');
  jsonObject:Object = {
    name:'yexd'
  };
  case = 'adcABC';
  number = 9.9;
  sex1 = 'male';
  sex2 = 'female';
  constructor(public navCtrl: NavController) {
  }

}
