import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/view-controller/main.html'
})
export class MyViewCtrlPage{

  constructor(public viewCtrl: ViewController) {

  }

  ionViewWillEnter(){
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar());
  }

}
