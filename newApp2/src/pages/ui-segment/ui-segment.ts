import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ui-segment',
  templateUrl: 'ui-segment.html'
})
export class UiSegmentPage {
  pet: string = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}
  
}
