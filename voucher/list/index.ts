import {Refresher, InfiniteScroll, NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core';
import {VoucherDetail} from '../detail/index';

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
      pic: "img/lyd.jpg",
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
      pic: "img/lyd.jpg",
      venues: "北京鸟巢体育中心",
      seat: "6排14号",
      time: "2016-10-10 19:00"
    }
  ];

}

@Component({
  templateUrl: 'build/voucher/list/main.html',
  providers: [DataServiceProvider]
})
export class VoucherList {
  items:any[];

  constructor(public service:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController) {
    this.items = this.service.getData();
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
    this.nav.push(VoucherDetail, {});
  }

  ionViewWillEnter() {
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
  }
}



