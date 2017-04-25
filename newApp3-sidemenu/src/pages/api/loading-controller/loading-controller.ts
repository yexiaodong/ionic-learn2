import { Component } from '@angular/core';
import { IonicPage, LoadingController,NavController } from 'ionic-angular';
import { AlertControllerPage } from '../alert-controller/alert-controller';


@IonicPage()
@Component({
  selector: 'page-loading-controller',
  templateUrl: 'loading-controller.html',
})
export class LoadingControllerPage {
  Page2 = AlertControllerPage;

  constructor(public nav: NavController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {}

  //默认
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: '加载中...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      this.nav.push(this.Page2);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  //错误测试
  test() {
    let loading = this.loadingCtrl.create({
      content: '加载中...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
    loading.present();
    loading.dismiss();
  }

  //解决1
  testEx() {
    let loading1 = this.loadingCtrl.create({
      content: '加载中1...'
    });
    let loading2 = this.loadingCtrl.create({
      content: '加载中2...'
    });

    loading1.present();
    loading2.present();

    setTimeout(() => {
      loading2.dismiss();
    }, 5000);

    setTimeout(() => {
      loading1.dismiss();
    }, 7000);
  }

  //测试
  testOther() {
    let loading1 = this.loadingCtrl.create({
      content: '加载中1...'
    });
    console.log('present前',loading1);
    loading1.present();
    console.log('present后',loading1);
    setTimeout(() => {
      console.log('dismiss前',loading1);
      loading1.dismiss();
      console.log('dismiss后',loading1);
    }, 3000);
    setTimeout(() => {
      console.log('7000',loading1,loading1._state);
    }, 7000);
  }

}
