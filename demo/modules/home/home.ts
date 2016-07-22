import {Component} from '@angular/core';
import {NavController,NavParams,Loading,ViewController} from 'ionic-angular';
import {MyList} from "../list/list";
import {MyDetail} from "../detail/details";

@Component({
  templateUrl: 'build/demo/modules/home/home.html',
})
export class HomePage {
  constructor(
      public nav : NavController,
      public params : NavParams,
      public viewCtrl: ViewController
  ) {}

  gotoList (){

    let loading = Loading.create({
      // spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    this.nav.present(loading).then(() => {
      this.nav.push(MyList,{}).then(() => {
          loading.dismiss();
      });
    });

    // setTimeout(() => {
    //   this.nav.push(MyList,{}).then(() => {
    //     loading.dismiss();
    //   });
    // }, 100);

    // setTimeout(() => {
    //   loading.dismiss();
    // }, 5000);



  }

  ionViewWillEnter(){
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
  }

}
