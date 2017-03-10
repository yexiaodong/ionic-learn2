import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PhoneCallPage } from './phone-call/phone-call';
import { PhoneMailPage } from './phone-mail/phone-mail';
import { PhoneCameraPage } from './phone-camera/phone-camera';
import { PhoneNativePage } from  './phone-native/phone-native';
import { PhoneSQLPage } from './phone-sql/phone-sql';
import { XxxPage } from '../../pages/xxx/xxx';


@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html'
})
export class PhonePage {
  public pageItems;//菜单
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.pageItems = [
      {title:'读写数据库',icon:'keypad',page:PhoneSQLPage,color:'primary'},
      {title: '加密解密',icon:'key',page:XxxPage,color:'secondary'},
      {title:'拨打电话',icon:'call',page:PhoneCallPage,color:'danger'},
      {title:'读短信',icon:'mail',page:PhoneMailPage,color:'dark'},
      {title:'摄像机',icon:'camera',page:PhoneCameraPage,color:'primary'},
      {title:'入门使用',icon:'book',page:PhoneNativePage,color:'secondary'},
      {title:'相册',icon:'heart',page:PhoneMailPage,color:'danger'},
      {title:'待定',icon:'heart',page:XxxPage,color:'light'}
    ];
  }

  //打开视图
  viewItem(item) {
    this.navCtrl.push(item.page);
  }


}
