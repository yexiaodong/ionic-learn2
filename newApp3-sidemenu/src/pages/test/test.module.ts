import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test } from './test';
import { TestBasePage } from './test-base/test-base';

@NgModule({
  declarations: [
    Test,
    TestBasePage,
  ],
  entryComponents:[
    TestBasePage
  ],
  imports: [
    IonicPageModule.forChild(Test),
  ],
  exports: [
    Test,
  ]
})
export class TestModule {}
