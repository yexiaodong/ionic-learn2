import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Md5 } from "ts-md5/dist/md5";

/*
  Generated class for the PhoneAES page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-aes',
  templateUrl: 'phone-aes.html'
})
export class PhoneAESPage {
  inputText;
  outputText;
  MD5Text;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneAESPage');
  }

  encryption(){
    this.MD5Text = Md5.hashStr(this.inputText);
    console.log(this.MD5Text);
  }

}
