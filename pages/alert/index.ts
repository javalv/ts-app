import {App, Page, Alert, NavController} from 'ionic-angular';

import {Component} from '@angular/core';


@Component({
  templateUrl: 'build/pages/alert/main.html'
})
export class MyAlert {

  constructor(public nav: NavController) {
    //this.nav = nav;
  }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['Ok']
    });

    this.nav.present(alert);
  }


}
