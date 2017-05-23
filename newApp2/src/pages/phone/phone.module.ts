import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../../providers/data';
import { Ionic2RatingModule  } from 'ionic2-rating';
import { DatePicker } from '@ionic-native/date-picker';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { PhoneCallPage } from './phone-call/phone-call';
import { PhoneCameraPage } from './phone-camera/phone-camera';
import { PhoneDatePickerPage } from './phone-date-picker/phone-date-picker';
import { PhoneMailPage } from './phone-mail/phone-mail';
import { PhoneModalPage } from './phone-modal/phone-modal';
import { PhoneNativePage } from './phone-native/phone-native';
import { PhonePhotoViewerPage } from './phone-photo-viewer/phone-photo-viewer';
import { PhoneSQLPage } from './phone-sql/phone-sql';
import { PhoneAESPage } from './phone-aes/phone-aes';
import { PhoneAngularCyclePage } from './phone-angular-cycle/phone-angular-cycle';
import { PhoneStarPage } from './phone-star/phone-star';
import { PhoneFuWenBenPage } from './phone-fu-wen-ben/phone-fu-wen-ben';


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),Ionic2RatingModule
  ],
  declarations: [
    PhoneCallPage,
    PhoneCameraPage,
    PhoneDatePickerPage,
    PhoneMailPage,
    PhoneNativePage,
    PhonePhotoViewerPage,
    PhoneSQLPage,
    PhoneAESPage,
    PhoneAngularCyclePage,
    PhoneStarPage,
    PhoneFuWenBenPage,
    PhoneModalPage,
  ],
  entryComponents: [
    PhoneCallPage,
    PhoneCameraPage,
    PhoneDatePickerPage,
    PhoneMailPage,
    PhoneNativePage,
    PhonePhotoViewerPage,
    PhoneSQLPage,
    PhoneAESPage,
    PhoneAngularCyclePage,
    PhoneStarPage,
    PhoneFuWenBenPage,
    PhoneModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,Data,DatePicker,PhotoViewer],
  exports: [IonicModule]
})
export class PhoneModule {}
