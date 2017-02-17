import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PhoneCallPage } from '../../pages/phone-call/phone-call';
import { PhoneMailPage } from '../../pages/phone-mail/phone-mail';
import { PhoneCameraPage } from '../../pages/phone-camera/phone-camera';
import { PhoneNativePage } from  '../../pages/phone-native/phone-native';
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
      {title:'数据交互',icon:'keypad',page:XxxPage,color:'primary'},
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
