import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPageNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'change-my-name',
  segment:'my-path/:id'
})
@Component({
  selector: 'page-test-page-name',
  templateUrl: 'test-page-name.html',
})
export class TestPageNamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPageNamePage');
    console.log('参数：',this.navParams.get('id'));
  }

}
