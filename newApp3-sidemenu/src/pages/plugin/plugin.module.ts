import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Plugin } from './plugin';

@NgModule({
  declarations: [
    Plugin,
  ],
  imports: [
    IonicPageModule.forChild(Plugin),
  ],
  exports: [
    Plugin
  ]
})
export class PluginModule {}
