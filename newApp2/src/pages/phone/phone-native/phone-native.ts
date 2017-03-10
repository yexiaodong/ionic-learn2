import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the PhoneNative page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-native',
  templateUrl: 'phone-native.html'
})
export class PhoneNativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public plt: Platform) {
    this.plt.ready().then((readySource) =>{
      console.log('Platform ready from',readySource);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneNativePage');
  }

  useCamera(){
    //调用插件
    Camera.getPicture().then(
      res => console.log("获取图片成功！"),
      err =>console.error("获取图片失败！",err)
    );
  }

}
