import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { RecordPage } from './record';
import { RecordListPage } from './record-list/record-list';
import { RecordDetailPage } from './record-detail/record-detail';


@NgModule({
  declarations: [
    RecordPage,
    RecordListPage,
    RecordDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  entryComponents: [
    RecordPage,
    RecordListPage,
    RecordDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  exports: [IonicModule]
})
export class RecordModule {}
