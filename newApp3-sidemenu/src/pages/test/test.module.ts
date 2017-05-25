import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test } from './test';
import { TestBasePage } from './test-base/test-base';
import { ComponentList } from '../../components/component-list/component-list';
import { TestComponentPage } from './test-component/test-component';
import { TestEhrPage } from './test-ehr/test-ehr';
import { TestFuwenbenPage } from './test-fuwenben/test-fuwenben';
import { TestLoginPage } from './test-ehr/test-login/test-login';
import { TestInputModule } from './test-input/test-input.module';

import { EhrService } from '../../providers/ehr-service';

@NgModule({
  declarations: [
    ComponentList,
    Test,
    TestBasePage,
    TestComponentPage,
    TestEhrPage,
    TestLoginPage,
    TestFuwenbenPage
  ],
  entryComponents:[
    ComponentList,
    TestBasePage,
    TestComponentPage,
    TestEhrPage,
    TestLoginPage,
    TestFuwenbenPage
  ],
  imports: [
    IonicPageModule.forChild(Test),
    TestInputModule
  ],
  exports: [
    Test,
  ]
})
export class TestModule {}
