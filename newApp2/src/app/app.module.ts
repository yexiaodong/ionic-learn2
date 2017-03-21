import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

import { MyApp } from './app.component';
import { UiPage } from '../pages/ui/ui';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PhonePage } from '../pages/phone/phone';
import {AddItemPage} from '../pages/add-item-page/add-item-page';
import {ItemDetailPage} from '../pages/item-detail-page/item-detail-page';
import { XxxPage } from '../pages/xxx/xxx';
import { ModelTestPage } from '../pages/model-test/model-test';
import { ModelInputsOutputsPage } from '../pages/model-inputs-outputs/model-inputs-outputs';
import { UiModule } from '../pages/ui/ui.module';
import { PhoneModule } from '../pages/phone/phone.module';
import { SexPipe } from '../providers/sex-pipe';





@NgModule({
  declarations: [
    MyApp,
    UiPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonePage,
    AddItemPage,
    ItemDetailPage,
    XxxPage,
    ModelTestPage,
    ModelInputsOutputsPage,
    SexPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    UiModule,
    PhoneModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UiPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonePage,
    AddItemPage,
    ItemDetailPage,
    XxxPage,
    ModelTestPage,
    ModelInputsOutputsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,Data]
})
export class AppModule {
}
