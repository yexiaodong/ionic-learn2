import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PhoneAngularCycle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-angular-cycle',
  templateUrl: 'phone-angular-cycle.html'
})
export class PhoneAngularCyclePage {
  texts = [];
  number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.push('constructor，构造方法');
  }

  //在构造方法之后。
  ionViewDidLoad() {
    this.push('ionViewDidLoad，加载完成，如果页面被缓存，将将不会在执行');
  }

  ionViewWillEnter(){
    this.push('ionViewWillEnter，当页面即将成为活动页面');
  }

  ionViewDidEnter(){
    this.push('ionViewDidEnter，当页面已经成为活动页面，无论是否缓存都被执行');
  }

  ionViewWillLeave(){
    this.push('ionViewWillLeave，即将离开时');
  }

  ionViewDidLeave(){
    this.push('ionViewWillLeave，已经离开时');
  }

  ionViewWillUnload(){
    this.push('ionViewWillUnload,页面即将被摧毁时');
    console.log('ionViewWillUnload,页面即将被摧毁时');
    //view.dismiss()执行后会触发改事件。
  }

  //不会用
  ionViewCanEnter(){
    this.push('ionViewCanEnter，进入页面前运行，检查权限验证，构造方法可以执行');
  }

  ionViewCanLeave(){
    this.push('ionViewCanEnter，离开页面前运行，检查权限验证，ionViewWillUnload触发前执行');
    console.log('ionViewCanEnter，离开页面前运行，检查权限验证，ionViewWillUnload触发前执行');
    //view.dismiss()执行后会触发改事件。
  }

  //使用@input修饰的变量的值变化时触发。
  /*
  ngOnChanges(){
    this.push('执行ngOnChanges');
  }

  ngOnInit(){
    this.push('执行ngOnInit');
  }

  ngDoCheck(){
    this.push('执行ngDoCheck');
  }

  ngAfterContentInit(){
    this.push('执行ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.push('执行ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.push('执行ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.push('执行ngAfterViewChecked');
  }

  ngOnDestory(){
    this.push('执行ngOnDestory');
  }
  */

  push(text){
    this.number = this.number + 1;
    this.texts.push(this.number + text);
  }

}
