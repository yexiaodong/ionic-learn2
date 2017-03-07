import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UiListAdvancedImg page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ui-list-advanced-img',
  templateUrl: 'ui-list-advanced-img.html'
})
export class UiListAdvancedImgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiListAdvancedImgPage');
  }

}
