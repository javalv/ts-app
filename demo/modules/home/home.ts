import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {MyList} from "../list/list";

@Component({
  templateUrl: 'build/demo/modules/home/home.html',
})
export class HomePage {
  constructor(
      public nav : NavController,
      public params : NavParams
  ) {}

  gotoList (){
    this.nav.push(MyList,{});
  }

}
