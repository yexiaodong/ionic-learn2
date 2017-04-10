import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

/*
  Generated class for the PhoneStar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-star',
  templateUrl: 'phone-star.html'
})
export class PhoneStarPage {
  rate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  onModelChange(){
    console.log("星级评分",this.rate);
  }


}
