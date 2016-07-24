import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Component, Injectable} from '@angular/core';

declare var QRCode: any;

@Component({
  templateUrl: 'build/voucher/qrcode/main.html'
})
export class VoucherQrcode {
  item:any;

  constructor(
              public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController) {

  }


  ionViewWillEnter() {
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
    var qrEle = document.getElementById("qrcode");
    var qrCode = new QRCode(qrEle,{
      //width: 220,
      //height: 220,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });

    //var timestamp = Date.parse(new Date());
    qrCode.makeCode("test test");
    //var img = qrEle.lastChild;
    //img.style.margin = 'auto';
  }
}



