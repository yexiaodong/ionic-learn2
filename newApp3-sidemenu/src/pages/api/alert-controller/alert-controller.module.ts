import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertControllerPage } from './alert-controller';

@NgModule({
  declarations: [
    AlertControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertControllerPage),
  ],
  exports: [
    AlertControllerPage
  ]
})
export class AlertControllerModule {}
