import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core';

/**
 * Mock Data Access Object
 **/
@Injectable()
class DataServiceProvider {

  getData() {
    // return mock data synchronously
    let data = this._data;
    return data;
  }

  private _data = [
    {
      name: "炎亚纶睡不著演唱会",
      pic: "img/lyd.jpg",
      venues: "北京鸟巢体育中心",
      seat: "6排11号",
      time: "2016-10-10 19:00"
    }
  ];

}

@Component({
  templateUrl: 'build/voucher/detail/main.html',
  providers: [DataServiceProvider]
})
export class VoucherDetail {
  item:any;

  constructor(public service:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController) {
    this.item = this.service.getData();
  }


  ionViewWillEnter() {
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
  }
}



