import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetControllerPage } from './action-sheet-controller';

@NgModule({
  declarations: [
    ActionSheetControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetControllerPage),
  ],
  exports: [
    ActionSheetControllerPage
  ]
})
export class ActionSheetControllerModule {}
