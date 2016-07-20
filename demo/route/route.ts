import {Component,Injectable} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../../demo/modules/home/home";
import {MyList} from "../../demo/modules/list/list";
import {MyDetail} from '../../demo/modules/detail/details';

@Injectable()
export class NameService {
  names: Array<string>;


  constructor() {
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }

  getNames() {
    return this.names;
  }
}
@Component({
  // selector: 'my-app',
  providers: [NameService]
})
export class Routing {
  private mapping : any;
  private nav: NavController

  constructor(nav: NavController) {
    this.nav = nav;
    this.mapping = {
      "home":HomePage,
      "list":MyList,
      "detail":MyDetail
    }
  }

  navTo(path:string , params:any) {
    var page = this.mapping[path];
    this.nav.push(page, params);
  }
}
