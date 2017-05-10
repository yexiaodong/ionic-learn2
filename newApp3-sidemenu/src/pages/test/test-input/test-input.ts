import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test-input',
  templateUrl: 'test-input.html',
})
export class TestInputPage {
  myTextarea;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  deal(){
    console.log('deal');
    this.myTextarea = this.myTextarea.replace(/\n/g, '_@').replace(/\r/g, '_#')
      .replace(/_@/g, '<br/>').replace(/\s/g, '&nbsp;');
    document.getElementById('dealResult').innerHTML = this.myTextarea;
  }

}
