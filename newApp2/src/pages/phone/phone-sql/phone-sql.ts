import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite } from 'ionic-native';


@Component({
  selector: 'page-phone-sql',
  templateUrl: 'phone-sql.html'
})
export class PhoneSQLPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.openDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneSQLPage');
  }

  openDatabase(){
    console.log('openDatabase方法');
    //打开数据库
    SQLite.openDatabase({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLite) => {
        console.log("打开数据库成功！",db);
        db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
          console.log("创建数据库表成功！");
        }).catch(() => {
          console.log("创建数据库表失败！");
        });
      })
      .catch(error => console.error('打开数据库失败！', error));
  }

}
