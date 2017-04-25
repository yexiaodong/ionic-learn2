import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TypescriptThread page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-typescript-thread',
  templateUrl: 'typescript-thread.html'
})
export class TypescriptThreadPage {
  thread;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  //开始线程
  test(){
    this.myThread();
  }

  //结束线程
  endTest(){
    clearTimeout(this.thread);
  }

  myThread(){
    this.thread = setTimeout(()=>{
      console.log('循环输出');
      this.myThread();
    },2000);
  }

}
