import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-phone-camera',
  templateUrl: 'phone-camera.html'
})
export class PhoneCameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneCameraPage');
  }

  testBtn(){
    let image = document.getElementById('myImage');
    (<HTMLImageElement>image).src="assets/image/logo.png";
    console.log("按钮测试，成功！");
  }

  useCamera(){
    //调用插件
    Camera.getPicture().then(
      (imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        let image = document.getElementById('myImage');
        (<HTMLImageElement>image).src=imageData;
        console.log("获取图片成功！" + base64Image);
        console.log("iamgeData数据：" + imageData);
        console.log("base64Image数据：" + base64Image);
      },
      err =>console.error("获取图片失败！",err)
    );
  }

}
