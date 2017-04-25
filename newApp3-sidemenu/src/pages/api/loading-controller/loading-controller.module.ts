import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingControllerPage } from './loading-controller';

@NgModule({
  declarations: [
    LoadingControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingControllerPage),
  ],
  exports: [
    LoadingControllerPage
  ]
})
export class LoadingControllerModule {}
