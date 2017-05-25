import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestFuwenbenPage } from './test-fuwenben';

@NgModule({
  declarations: [
    TestFuwenbenPage,
  ],
  imports: [
    IonicPageModule.forChild(TestFuwenbenPage)
  ],
  exports: [
    TestFuwenbenPage
  ]
})
export class TestFuwenbenModule {}
