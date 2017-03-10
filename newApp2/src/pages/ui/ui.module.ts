import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { UiSegmentPage } from "./ui-segment/ui-segment";
import { UiSegmentSliderPage } from "./ui-segment-slider/ui-segment-slider";
import { UiListPage } from "./ui-list/ui-list";
import { UiListAdvancedPage } from "./ui-list-advanced/ui-list-advanced";
import { UiListAdvancedImgPage } from './ui-list-advanced-img/ui-list-advanced-img';

import { Storage } from '@ionic/storage';
import { Data } from '../../providers/data';


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    UiSegmentPage,
    UiSegmentSliderPage,
    UiListPage,
    UiListAdvancedPage,
    UiListAdvancedImgPage
  ],
  entryComponents: [
    UiSegmentPage,
    UiSegmentSliderPage,
    UiListPage,
    UiListAdvancedPage,
    UiListAdvancedImgPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,Data],
  exports: [IonicModule]
})
export class UiModule {}
