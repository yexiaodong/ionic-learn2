import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { EhrService } from '../../../../providers/ehr-service';

@Component({
  selector: 'page-test-login',
  templateUrl: 'test-login.html',
})
export class TestLoginPage {
  ehrService = new EhrService();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestLogin');
  }

  testService(){
    this.ehrService.test();
  }

}
