import {Refresher, InfiniteScroll, NavController, NavParams,ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core';
import {VoucherDetail} from '../detail/index';


@Component({
  templateUrl: 'build/voucher/orders/main.html',
})
export class OrdersList {
  items:any[];
  private _data : any[];

  constructor(public params:NavParams,
              public nav:NavController,
              public viewCtrl: ViewController
  ) {

    // console.info(params)

    // setTimeout(() => {
      this._data = [
        {
          name: "炎亚纶睡不著演唱会",
          pic: "img/yyl.jpg",
          time: "2016-10-10"
        }
      ];
      this.items = this.getData();
    // }, 1000)
  }

  doRefresh(refresher:Refresher) {
    console.log('DOREFRESH', refresher);

    var data = [
      {
        name: "炎亚纶睡不著演唱会",
        pic: "img/yyl.jpg",
        time: "2016-10-10"
      }
    ];
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

    this.getAsyncData().then((newData:string[]) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push(newData[i]);
      }

      infiniteScroll.complete();

      if (newData.length < 10) {
        infiniteScroll.enable(false);
      }

    });
  }

  getData() {
    // return mock data synchronously
    let data = [];
    for (var i = 0; i < 1; i++) {
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

  gotoDetail() {
    this.nav.push(VoucherDetail, {});
  }

  ionViewWillEnter(){
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
  }
}



