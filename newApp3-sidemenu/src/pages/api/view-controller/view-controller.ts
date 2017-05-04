import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-controller',
  templateUrl: 'view-controller.html',
})
export class ViewControllerPage {

  constructor(public viewCtrl: ViewController) {
    //写法1，但该写法不是正规的，在使用onWillDismiss时，失败
    viewCtrl.onDidDismiss(() =>{
      console.log('页面关闭后');
    });
    viewCtrl.onWillDismiss(function () {//无效
      console.log('页面关闭前-onWillDismiss');
    });

    //写法2
    viewCtrl.willUnload.subscribe(()=>this.onWillUnload());
    viewCtrl.willLeave.subscribe(()=>this.onWillLeave());
  }

  ionViewDidLoad() {}

  pageRef(){
    console.log(this.viewCtrl.pageRef());
  }

  pageName(){
    console.log(this.viewCtrl.pageRef().nativeElement.tagName);
  }
  getContent(){
    console.log(this.viewCtrl.getContent());
  }

  enableBack(){
    console.log(this.viewCtrl.enableBack());
  }

  onWillUnload(){
    console.log('退出视图前-onWillUnload');
  }

  onWillLeave(){
    console.log('离开视图前-onWillLeave')
  }

  ionViewWillLeave(){
    console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");
    this.ionViewCanEnter();
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");
  }
}
