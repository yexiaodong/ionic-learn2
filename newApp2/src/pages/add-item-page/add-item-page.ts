import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {
  title;
  description;
  constructor(public navCtrl:NavController, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPagePage');
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };
    console.log("add description:" + newItem.description);
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }
}
