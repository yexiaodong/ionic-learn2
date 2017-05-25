import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestInputPage } from './test-input';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';

@NgModule({
  declarations: [
    TestInputPage,
  ],
  imports: [
    IonicPageModule.forChild(TestInputPage),
  ],
  exports: [
    TestInputPage
  ]
})
export class TestInputModule {}
