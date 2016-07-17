import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ApiDemoApp} from  './pages/infinite-scroll/index';
import {MyRefresher} from './pages/refresher/index';
import {MyAlert} from './pages/alert/index';
import {MyAction} from './pages/action-sheet/index';
import {MyNav} from './pages/nav/pages';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = MyRefresher;

  constructor(platform: Platform) {
    //platform.ready().then(() => {
    //  // Okay, so the platform is ready and our plugins are available.
    //  // Here you can do any higher level native things you might need.
    //  StatusBar.styleDefault();
    //});
  }
}

ionicBootstrap(MyApp);
