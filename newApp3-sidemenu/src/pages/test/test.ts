import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestBasePage } from './test-base/test-base';
import { TestEhrPage }  from './test-ehr/test-ehr';

/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  items = [
    {title:'Test-base',note:'空白页面',page:TestBasePage},
    {title:'Test-EHR',note:'健康档案',page:TestEhrPage}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  pushPage(item){
    this.navCtrl.push(item.page);
  }

}
