import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {HttpService} from '../service/httpService';
import {VoucherQrcode} from '../qrcode/index';


@Component({
  templateUrl: 'build/voucher/detail/main.html',
  providers: [HttpService]
})
export class VoucherDetail {
  item:any;
  loaded:boolean;
  constructor(
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    this.item = {};
    //service.getData();
    this.loaded = false;
  }

  gotoCheck(){
    this.nav.push(VoucherQrcode, {});
  }

  ionViewWillEnter() {

    console.log("id:"+this.nav.id);
    //this.viewCtrl.showBackButton(false);
    this.viewCtrl.setBackButtonText('');
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
    this.http.getOne().then(data => {
      this.item = data;
      setTimeout(() => {
        this.loaded = true;

      },1000)
    })


  }
}



