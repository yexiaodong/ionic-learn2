import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test } from './test';
import { TestBasePage } from './test-base/test-base';
import { TestEhrPage } from './test-ehr/test-ehr';
import { TestLoginPage } from './test-ehr/test-login/test-login';

import { EhrService } from '../../providers/ehr-service';

@NgModule({
  declarations: [
    Test,
    TestBasePage,
    TestEhrPage,
    TestLoginPage
  ],
  entryComponents:[
    TestBasePage,
    TestEhrPage,
    TestLoginPage
  ],
  imports: [
    IonicPageModule.forChild(Test)
  ],
  exports: [
    Test,
  ]
})
export class TestModule {}
