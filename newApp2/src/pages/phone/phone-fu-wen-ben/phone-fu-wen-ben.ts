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

  /*
  健康答案bug测试
  居中、居左、居右、下划线等不生效
  */
  getEHR(){
    return this.sanitizer.bypassSecurityTrustHtml('<p style="white-space: normal;"><em>&nbsp;</em><span style="text-decoration: underline;">下横线</span>&nbsp;<span style="border: 1px solid rgb(0, 0, 0);">字符边框</span>&nbsp;<strong>加粗&nbsp;</strong><em>斜体 编辑</em></p><p style="white-space: normal; text-align: center;">居中</p><p style="white-space: normal; text-align: right;">居右</p><p style="white-space: normal;">居左</p><p style="white-space: normal;">&nbsp; 多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多运动字体怎么这么小呢无需吃药治疗，多喝水多</p><p><br/></p>end');
  }

}
