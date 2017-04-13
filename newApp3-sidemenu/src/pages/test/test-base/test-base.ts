import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-test-base',
  templateUrl: 'test-base.html',
})
export class TestBasePage {
  texts = [];
  num = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  testBtn(){
    this.texts.push('item'+ this.num);
    this.num = this.num + 1;
  }

}
