import {Refresher, InfiniteScroll, NavController, NavParams, ViewController, Popover} from 'ionic-angular';
import {Component, Injectable,EventEmitter,Input,Output} from '@angular/core';
// import {Http} from '@angular/http';
import {VoucherDetail} from '../detail/index';
import {RecordsList} from '../records/index';
import {OrdersList} from '../orders/index';
import {HttpService} from '../service/httpService';
import {MyComponent} from '../directives/myComponet';

/**
 * Mock Data Access Object
 **/
@Injectable()
class DataServiceProvider {

  getData() {
    // return mock data synchronously
    let data = [];
    for (var i = 0; i < 5; i++) {
      data.push(this._getRandomData());
    }
    return data;
  }

  getAsyncData() {
    // async receive mock data
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(this.getData());
      }, 1000);

    });
  }

  private _getRandomData() {
    let i = Math.floor(Math.random() * this._data.length);
    return this._data[i];
  }

  private _data = [
    {
      name: "炎亚纶睡不著演唱会",
      pic: "img/yyl.jpg",
      venues: "北京鸟巢体育中心",
      seat: "6排11号",
      time: "2016-10-10 19:00"
    }, {
      name: "李云迪演唱会",
      pic: "img/lyd.jpg",
      venues: "北京鸟巢体育中心",
      seat: "6排12号",
      time: "2016-10-10 19:00"
    }, {
      name: "周华健演唱会",
      pic: "img/zhj.png",
      venues: "北京鸟巢体育中心",
      seat: "6排13号",
      time: "2016-10-10 19:00"
    }, {
      name: "炎亚纶睡不著演唱会",
      pic: "img/yyl.jpg",
      venues: "北京鸟巢体育中心",
      seat: "6排14号",
      time: "2016-10-10 19:00"
    }
  ];

}

@Component({
  template: `<ion-list>
  <ion-item (click)="gotoRecords()">
    <ion-icon name="ios-create-outline" item-left></ion-icon>
      转赠纪录
  </ion-item>
  <ion-item (click)="gotoOrders()">
    <ion-icon name="ios-create" item-left></ion-icon>
      我的订单
  </ion-item>
</ion-list>`
})
export class MyPopover {
  constructor(public nav:NavController,
              public viewCtrl:ViewController) {
  }

  gotoRecords() {

    this.nav.push(RecordsList, {}).then((T) => {
      console.log(T);
      this.close();
    });
  }

  gotoOrders() {

    this.nav.push(OrdersList, {}).then((T) => {
      console.log(T);
      this.close();
    });
  }

  private close() {
    this.viewCtrl.dismiss();
  }
}

@Component({
  templateUrl: 'build/voucher/list/main.html',
  providers: [DataServiceProvider, HttpService],
  directives:[MyComponent]
})
class TabTextPage {
  loaded:boolean;
  items:any[];
  private realNav:any;

  constructor(public service:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public httpService:HttpService) {
    console.info("parent" + this.nav.parent);
    this.items = [];
    this.realNav = this.nav.parent.parent;
    this.loaded = false;
  }

  doRefresh(refresher:Refresher) {
    var data = this.service.getData();
    var items = this.items;
    setTimeout(() => {
      for (var i = 0; i < data.length; i++) {
        items.unshift(data[i]);
      }
      refresher.complete();
    }, 1000);

  }

  doPulling(refresher:Refresher) {
    console.log('DOPULLING', refresher.progress);
  }

  doInfinite(infiniteScroll:InfiniteScroll) {
    this.service.getAsyncData().then((newData:string[]) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push(newData[i]);
      }

      infiniteScroll.complete();

      if (newData.length < 10) {
        infiniteScroll.enable(false);
      }

    });
  }

  gotoDetail() {

    this.realNav.push(VoucherDetail, {});
  }


  showPopover(ev) {
    let popover = Popover.create(MyPopover, {}, {
      cssClass: 'popover',
      //showBackdrop:false
    })
    this.nav.present(popover, {
      ev: ev
    })


  }

  ionViewWillEnter() {
    console.log("id:" + this.nav.id)
    this.nav.remove(0);
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
    this.httpService.getAsyncData().then((data:any[]) => {
      for (var i = 0; i < data.length; i++) {
        this.items.push(data[i]);
      }
      // console.log(data);
      this.loaded = true;
    })

    // var t = this;
    // setTimeout(()=> {
    //   t.loaded = true;
    // }, 2000)
  }


}

class TabTextPage1 extends TabTextPage {
  constructor(public service:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    super(service, params, nav, viewCtrl, http);

  }
}
class TabTextPage2 extends TabTextPage {
  constructor(public service:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    super(service, params, nav, viewCtrl, http);

  }
}

@Component({
  template: `<loading-div [loaded]="loaded"></loading-div>
    <ion-tabs class="tabs-basic list-root" tabbarPlacement="top"
     preloadTabs="false">
      <ion-tab tabTitle="即将开始" [root]="tabOne" ></ion-tab>
      <ion-tab tabTitle="已经结束" [root]="tabTwo" ></ion-tab>
    </ion-tabs>
`,
  directives:[MyComponent]
})
export class VoucherList {
  loaded:boolean;
  constructor(public nav:NavController) {
    this.loaded = false;
  }

  tabOne = TabTextPage1;
  tabTwo = TabTextPage2;

  ionViewWillEnter() {
    setTimeout(() => {
      this.loaded = true;
    },2000)
  }

}



