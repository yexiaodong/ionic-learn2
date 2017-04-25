import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetControllerPage } from './action-sheet-controller/action-sheet-controller';
import { AlertControllerPage } from './alert-controller/alert-controller';
import { LoadingControllerPage } from './loading-controller/loading-controller';

@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {
  items = [
    {title:'ActionSheetController',note:'弹窗-动作表单',page:ActionSheetControllerPage},
    {title:'AlertController',note:'弹窗-确认提示',page:AlertControllerPage},
    {title:'LoadingController',note:'加载中',page:LoadingControllerPage},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  pushPage(item){
    this.navCtrl.push(item.page);
  }

}
