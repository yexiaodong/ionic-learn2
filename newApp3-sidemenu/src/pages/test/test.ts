import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestBasePage } from './test-base/test-base';
import { TestComponentPage } from './test-component/test-component';
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
    {title:'Test-EHR',note:'健康档案',page:TestEhrPage},
    {title:'Test-组件',note:'组件触发父页面方法',page:TestComponentPage},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  pushPage(item){
    this.navCtrl.push(item.page);
  }

}
