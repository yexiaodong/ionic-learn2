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

}
