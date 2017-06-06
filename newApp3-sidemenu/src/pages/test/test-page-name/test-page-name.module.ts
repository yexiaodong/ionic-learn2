import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPageNamePage } from './test-page-name';

@NgModule({
  declarations: [
    TestPageNamePage,
  ],
  imports: [
    IonicPageModule.forChild(TestPageNamePage),
  ],
  exports: [
    TestPageNamePage
  ]
})
export class TestPageNamePageModule {}
