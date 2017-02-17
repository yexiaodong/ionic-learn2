import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PhonePage } from '../pages/phone/phone';
import {AddItemPage} from '../pages/add-item-page/add-item-page';
import {ItemDetailPage} from '../pages/item-detail-page/item-detail-page';
import { XxxPage } from '../pages/xxx/xxx';
import { PhoneCallPage } from '../pages/phone-call/phone-call';
import { PhoneCameraPage } from '../pages/phone-camera/phone-camera';
import { PhoneNativePage } from '../pages/phone-native/phone-native';
import { PhoneMailPage } from '../pages/phone-mail/phone-mail';

import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonePage,
    AddItemPage,
    ItemDetailPage,
    XxxPage,
    PhoneCallPage,
    PhoneCameraPage,
    PhoneNativePage,
    PhoneMailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonePage,
    AddItemPage,
    ItemDetailPage,
    XxxPage,
    PhoneCallPage,
    PhoneCameraPage,
    PhoneNativePage,
    PhoneMailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,Data]
})
export class AppModule {}
