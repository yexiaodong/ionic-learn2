import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {AddItemPage} from '../add-item-page/add-item-page';
import {ItemDetailPage} from '../item-detail-page/item-detail-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public dataService:Data) {
    this.dataService.getData().then((todos) =>{
      if(todos){
        this.items = JSON.parse(todos);
      }
    });
  }

  ionViewDidLoad(){
    this.items = [
      {title:'hi1',description:'test1'},
      {title:'hi2',description:'test2'},
      {title:'hi3',description:'test3'}
    ];
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item)=>{
      if(item){
        this.saveItem(item);
        console.log("Home description:" + item.description);
      }
    });
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage,{
      item:item
    });
  }
}
