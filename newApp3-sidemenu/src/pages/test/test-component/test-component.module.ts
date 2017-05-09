import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestComponentPage } from './test-component';

@NgModule({
  declarations: [
    TestComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(TestComponentPage),
  ],
  exports: [
    TestComponentPage
  ]
})
export class TestComponentModule {}
