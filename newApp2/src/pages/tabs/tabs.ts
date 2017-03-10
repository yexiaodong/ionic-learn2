import { Component } from '@angular/core';//添加后才可使用tabs标签

import { HomePage } from '../home/home';
import { UiPage } from '../ui/ui';
import { ContactPage } from '../contact/contact';
import { PhonePage } from '../phone/phone';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = UiPage;
  tab3Root: any = ContactPage;
  tab4Root: any = PhonePage;

  constructor() {

  }
}
