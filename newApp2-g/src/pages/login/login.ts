import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  pushPash;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPash = TabsPage;
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
  }

}
