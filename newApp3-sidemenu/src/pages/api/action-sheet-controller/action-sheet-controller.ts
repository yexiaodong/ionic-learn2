import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet-controller',
  templateUrl: 'action-sheet-controller.html',
})
export class ActionSheetControllerPage {

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Title - 操作选择',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '保存',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
