import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentList } from './component-list';

@NgModule({
  declarations: [
    ComponentList,
  ],
  imports: [
    IonicPageModule.forChild(ComponentList),
  ],
  exports: [
    ComponentList
  ]
})
export class ComponentListModule {}
