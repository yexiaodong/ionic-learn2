import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';//富文本

@Component({
  selector: 'page-phone-fu-wen-ben',
  templateUrl: 'phone-fu-wen-ben.html'
})
export class PhoneFuWenBenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public sanitizer:DomSanitizer) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneFuWenBenPage');
  }

  getInnerHtml()
  {
    return this.sanitizer.bypassSecurityTrustHtml('<p><strong>加粗</strong><em>斜</em><span style="color: rgb(0, 176, 240);">蓝色</span></p><p>换行</p><table><tbody><tr class="firstRow"><td style="word-break: break-all;" valign="top" width="261">1<br/></td><td style="word-break: break-all;" valign="top" width="261">2<br/></td><td style="word-break: break-all;" valign="top" width="261">3<br/></td></tr><tr><td style="word-break: break-all;" valign="top" width="261">4<br/></td><td style="word-break: break-all;" valign="top" width="261">5<br/></td><td style="word-break: break-all;" valign="top" width="261">6<br/></td></tr></tbody></table><p><br/></p>');
  }

}
