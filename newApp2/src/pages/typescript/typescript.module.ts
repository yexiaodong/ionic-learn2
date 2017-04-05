import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { TypescriptObjPage } from './typescript-obj/typescript-obj';

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    TypescriptObjPage
  ],
  entryComponents: [
    TypescriptObjPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  exports: [IonicModule]
})
export class TypescriptModule {}
