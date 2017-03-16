import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import {Platform} from 'ionic-angular';


@Component({
  selector: 'page-phone-sql',
  templateUrl: 'phone-sql.html'
})
export class PhoneSQLPage {
  public database: SQLite;
  public people: Array<Object>;
  firstname;
  lastname;

  constructor(private navController: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
        this.refresh();
      }, (error) => {
        console.log("ERROR: ", error);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneSQLPage');
  }

  public add() {

    this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [this.firstname,this.lastname]).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
      console.log('读取数据库：',data);
      this.people = [];
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
          this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

}
