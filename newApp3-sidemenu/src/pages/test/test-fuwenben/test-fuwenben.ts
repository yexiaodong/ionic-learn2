import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { DomSanitizer } from '@angular/platform-browser';//富文本

@IonicPage()
@Component({
  selector: 'page-test-fuwenben',
  templateUrl: 'test-fuwenben.html',
})
export class TestFuwenbenPage {

  constructor(public sanitizer:DomSanitizer,private photoViewer: PhotoViewer) {
    (<any>window).myClick = this.myClick;
    (<any>window).photoViewer = photoViewer;
  }

  ionViewDidLoad() {}

 getMyInnerHtml() {
    let text = '<p><strong>加粗</strong><img src="assets/icon/favicon.ico"></p>';
    text = text.replace('src=','onclick="myClick()" src=');
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  myClick(){
    (<any>window).photoViewer.show('http://cip.dongfeng-renault.com.cn/me_upload/ME/5926362d-cad4-45ca-b501-28d398e39cbb.jpg');
  }

}
