import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiPage } from './api';

import { ActionSheetControllerModule } from './action-sheet-controller/action-sheet-controller.module';
import { AlertControllerModule } from './alert-controller/alert-controller.module';
import { LoadingControllerModule } from './loading-controller/loading-controller.module';
import { ViewControllerModule } from './view-controller/view-controller.module';

@NgModule({
  declarations: [
    ApiPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiPage),
    ActionSheetControllerModule,
    AlertControllerModule,
    LoadingControllerModule,
    ViewControllerModule
  ],
  exports: [
    ApiPage
  ]
})
export class ApiModule {}
