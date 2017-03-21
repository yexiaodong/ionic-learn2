import { Component } from '@angular/core';
import { Badge } from 'ionic-native';

import { HomePage } from '../home/home';
import { UiPage } from '../ui/ui';
import { ContactPage } from '../contact/contact';
import { PhonePage } from '../phone/phone';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = UiPage;
  tab3Root: any = ContactPage;
  tab4Root: any = PhonePage;

  constructor() {
    /*徽章，页面调试需要注释，否则报错
    Badge.set(10).then((val)=>{
      alert(val);
    });
    */
  }
}
