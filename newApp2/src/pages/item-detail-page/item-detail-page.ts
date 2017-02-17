import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html'
})
export class ItemDetailPage {
  title;
  description;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("构造完成");
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    console.log("加载完成:" + this.description);
  }
}
