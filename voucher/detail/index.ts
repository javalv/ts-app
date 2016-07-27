import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {HttpService} from '../service/httpService';
import {VoucherQrcode} from '../qrcode/index';
import {MyComponent} from '../directives/myComponet'


@Component({
  templateUrl: 'build/voucher/detail/main.html',
  providers: [HttpService],
  // directives: [MyComponent]
})
export class VoucherDetail {
  item:any;
  constructor(
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

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
    this.http.getOne().then(data => {
      this.item = data;

    })


  }
}



