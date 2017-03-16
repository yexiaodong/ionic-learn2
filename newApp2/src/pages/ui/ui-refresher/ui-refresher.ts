import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UiRefresher page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ui-refresher',
  templateUrl: 'ui-refresher.html'
})
export class UiRefresherPage {
  items = ['初始化1','初始化2'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiRefresherPage');
  }

  doRefresh(refresher){
    console.log('下拉刷新（异步）',refresher);

    setTimeout(()=>{
      let refreshItems = ['下拉加载1','下拉加载2'];
      this.items = refreshItems.concat(this.items);

      console.log('异步执行完成');
      refresher.complete();
    },2000);
  }

}
