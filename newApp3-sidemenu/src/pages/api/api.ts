import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetControllerPage } from './action-sheet-controller/action-sheet-controller';

@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {
  items = [
    {title:'ActionSheetController',note:'动作表单',page:ActionSheetControllerPage}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  pushPage(item){
    this.navCtrl.push(item.page);
  }

}
