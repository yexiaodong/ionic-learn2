import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewControllerPage } from './view-controller';

@NgModule({
  declarations: [
    ViewControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewControllerPage),
  ],
  exports: [
    ViewControllerPage
  ]
})
export class ViewControllerModule {}
