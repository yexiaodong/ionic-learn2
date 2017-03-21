import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecordPage } from '../record/record';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageItems;//菜单
  
  constructor(public navCtrl: NavController) {
    this.pageItems = [
      {title:'档案模块',icon:'keypad',page:RecordPage,color:'primary'},
      {title: '档案模块',icon:'key',page:RecordPage,color:'secondary'},
      {title:'档案模块',icon:'call',page:RecordPage,color:'danger'},
    ];
  }
  
  //打开视图
  viewItem(item) {
    this.navCtrl.push(item.page);
  }

}
