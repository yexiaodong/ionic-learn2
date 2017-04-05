import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-typescript-obj',
  templateUrl: 'typescript-obj.html'
})
export class TypescriptObjPage {
  items:UserModel[];
  user = new UserModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    let returnItems = [
      {username:'yexd',password:'123'},
      {username:'lil',password:'098'}
    ];
    this.user.username = 'miss';

    this.items = JSON.parse(JSON.stringify(returnItems));
    console.log('输出对象' + JSON.stringify(this.items));
  }

  show(item){
    item.isShow = true;
  }

}


class UserModel {
  username:string;
  password:string;
  //扩展属性
  isShow:boolean = false;
}



