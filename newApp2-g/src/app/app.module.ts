import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecordModule } from '../pages/record/record.module';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultPage } from '../pages/consult/consult';
import { ListComponent } from '../components/list/list';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultPage,
    ListComponent,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    RecordModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultPage,
    ListComponent,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
