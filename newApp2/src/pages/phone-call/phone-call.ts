import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CallNumber} from 'ionic-native';
/*
  Generated class for the PhoneCall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-call',
  templateUrl: 'phone-call.html'
})
export class PhoneCallPage {
  number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.number = "1521721086";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneCallPage');
  }
  //CallNumber的使用
  Call(){
    var number = this.number
    console.log("拨打号码：" + number);
    CallNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
