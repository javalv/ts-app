import {Refresher, InfiniteScroll, NavController, NavParams, ViewController, Popover,Loading} from 'ionic-angular';
import {Component, Injectable,EventEmitter,Input,Output} from '@angular/core';
import {MapPoints} from "../points/index";
import {MapHots} from "../hots/index";
import {MapActual} from "../actual/index"

/**
 * Mock Data Access Object
 **/
@Injectable()
class DataServiceProvider {

}

@Component({
  template: `
    <ion-tabs class="tabs-basic list-root" tabbarPlacement="top"
     preloadTabs="false">
        <ion-tab tabIcon="water" tabTitle="点图" [root]="tab1"></ion-tab>
        <ion-tab tabIcon="leaf" tabTitle="热力图" [root]="tab2"></ion-tab>
        <ion-tab tabIcon="magnet" tabTitle="抢票" tabBadge="5" [root]="tab3"></ion-tab>
    </ion-tabs>
`,
})
export class MapHome {
  constructor(public nav:NavController) {

  }

  tab1 = MapPoints;
  tab2 = MapHots;
  tab3 = MapActual;

  ionViewWillEnter() {
    setTimeout(() => {

    },1000)
  }

}



