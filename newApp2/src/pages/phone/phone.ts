import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PhoneCallPage } from './phone-call/phone-call';
import { PhoneMailPage } from './phone-mail/phone-mail';
import { PhoneCameraPage } from './phone-camera/phone-camera';
import { PhoneNativePage } from  './phone-native/phone-native';
import { PhoneSQLPage } from './phone-sql/phone-sql';
import { PhoneAESPage } from './phone-aes/phone-aes';
import { XxxPage } from '../../pages/xxx/xxx';
import { PhoneAngularCyclePage } from './phone-angular-cycle/phone-angular-cycle';
import { PhoneStarPage } from './phone-star/phone-star';


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
      {title: '加密解密',icon:'key',page:PhoneAESPage,color:'secondary'},
      {title:'拨打电话',icon:'call',page:PhoneCallPage,color:'danger'},
      {title:'读短信',icon:'mail',page:PhoneMailPage,color:'dark'},
      {title:'摄像机',icon:'camera',page:PhoneCameraPage,color:'primary'},
      {title:'入门使用',icon:'book',page:PhoneNativePage,color:'secondary'},
      {title:'相册',icon:'heart',page:PhoneMailPage,color:'danger'},
      {title:'方法生命周期',icon:'ios-analytics',page:PhoneAngularCyclePage,color:'dark'},
      {title:'星级评分',icon:'ios-star',page:PhoneStarPage,color:'primary'},
      {title: '待开发',icon:'key',page:XxxPage,color:'secondary'},
      {title:'待开发',icon:'call',page:XxxPage,color:'danger'},
      {title:'待开发',icon:'mail',page:XxxPage,color:'dark'},
    ];
  }

  //打开视图
  viewItem(item) {
    this.navCtrl.push(item.page);
  }


}
