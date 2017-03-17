import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UiInfiniteScroll page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ui-infinite-scroll',
  templateUrl: 'ui-infinite-scroll.html'
})
export class UiInfiniteScrollPage {
  items = ['初始化1','初始化2','初始化3','初始化4','初始化5','初化6','初始化7','初始化8','初化9','初始化10','初始化11'];
  i = 3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiInfiniteScrollPage');
  }

  doInfinite(refresher){
    console.log('滑动加载开始（异步）',refresher);

    setTimeout(()=>{
      for(let n =0;n<3;n++){
        this.items.push('滑动加载'+ this.i);
        this.i = this.i+1;
      }

      console.log('异步执行完成');
      refresher.complete();
    },2000);
  }

}
