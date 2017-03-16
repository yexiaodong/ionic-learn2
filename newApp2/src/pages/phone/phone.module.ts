import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../../providers/data';

import { PhoneCallPage } from './phone-call/phone-call';
import { PhoneCameraPage } from './phone-camera/phone-camera';
import { PhoneNativePage } from './phone-native/phone-native';
import { PhoneMailPage } from './phone-mail/phone-mail';
import { PhoneSQLPage } from './phone-sql/phone-sql';
import { PhoneAESPage } from './phone-aes/phone-aes';


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    PhoneCallPage,
    PhoneCameraPage,
    PhoneNativePage,
    PhoneMailPage,
    PhoneSQLPage,
    PhoneAESPage
  ],
  entryComponents: [
    PhoneCallPage,
    PhoneCameraPage,
    PhoneNativePage,
    PhoneMailPage,
    PhoneSQLPage,
    PhoneAESPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,Data],
  exports: [IonicModule]
})
export class PhoneModule {}
