import {Component,Injectable} from '@angular/core';
import {NavController, NavParams,Loading} from 'ionic-angular';

import {VoucherDetail} from '../detail/index';
import {VoucherList} from '../home/index';
import {OrdersList} from '../orders/index';
import {VoucherQrcode} from '../qrcode/index';
import {RecordsList} from '../records/index';

/**
 *
 **/
@Injectable()
export class Routing {

  private mapping : any;
  private nav: NavController;

  constructor(nav: NavController) {
    this.nav = nav;
    this.mapping = {
      "list":VoucherList,
      "detail":VoucherDetail,
      "orders":OrdersList,
      "records":RecordsList,
      "qrcode":VoucherQrcode
    }
  }

  navTo(path:string , params:any) : Promise<any> {
    var page = this.mapping[path];

    let loading = Loading.create({
      spinner: 'hide',
      content: `
        <div>
          <p>loading ... </p>
        </div>`,
      duration: 1000
    });

    this.nav.present(loading).then(()=>{
      return this.nav.push(page, params);
    });

  }
}
