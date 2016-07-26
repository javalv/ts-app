import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './demo/modules/home/home';
import {MyInfiniteScroll} from  './pages/infinite-scroll/index';
import {MyRefresher} from './pages/refresher/index';
import {MyAlert} from './pages/alert/index';
import {MyAction} from './pages/action-sheet/index';
import {MyNav} from './pages/nav/pages';
import {MyList} from './demo/modules/list/list';
import {MyDetail} from './demo/modules/detail/details';
import {E2EPage} from './demo/modules/virtual-scroll/basic/index';
import {MyViewCtrlPage} from './pages/view-controller/index';
import {IconPage} from './pages/tabs/pages';
import {MyDirectiveTest} from './pages/directives/index';
import {MyComponent} from './voucher/directives/myComponet';
// import {Queue} from './voucher/directives/queue';

import {VoucherList} from './voucher/list/index';


@Component({
  template: ` <ion-nav  [root]="rootPage">
              </ion-nav>`
})
export class MyApp {
  rootPage: any = VoucherList;

  constructor(platform: Platform) {
    platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     StatusBar.styleDefault();
    });
  }

}

ionicBootstrap(MyApp);
