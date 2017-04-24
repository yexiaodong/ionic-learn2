import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsultPage } from '../consult/consult';
import { RecordPage } from '../record/record';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ConsultPage;
  tab2Root: any = RecordPage;

  constructor(public navCtrl: NavController) {

  }

}