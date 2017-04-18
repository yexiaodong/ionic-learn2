import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EhrService } from '../../../providers/ehr-service';
import { TestLoginPage } from './test-login/test-login';


@Component({
  selector: 'page-test-ehr',
  templateUrl: 'test-ehr.html',
})
export class TestEhrPage {
  public ehrService:EhrService;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
  }

  login(){
    this.navCtrl.push(TestLoginPage)
  }

}
