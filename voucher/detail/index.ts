import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {Http} from '@angular/http';
import {VoucherQrcode} from '../qrcode/index';

/**
 * Mock Data Access Object
 **/
@Injectable()
class DataServiceProvider {


  //private data : any;
  getData() {
    // return mock data synchronously



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

  constructor(public servie:DataServiceProvider,
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:Http) {

    this.item = {};
    //service.getData();

  }

  gotoCheck(){
    this.nav.push(VoucherQrcode, {});
  }

  ionViewWillEnter() {

    console.log("id:"+this.nav.id);
    //this.viewCtrl.showBackButton(false);
    this.viewCtrl.setBackButtonText('');
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
    this.http.get('json/people.json')
        //.map(res => res.json())
        .subscribe(data => {
          this.item = data.json();
        });
  }
}



