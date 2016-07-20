import {Component} from '@angular/core';
import {Routing} from '../../route/route';

@Component({
  templateUrl: 'build/demo/modules/home/home.html',
  providers:[Routing]
})
export class HomePage {
  private routing : Routing
  constructor(routing : Routing ) {
    this.routing = routing;
  }

  gotoList (){
    this.routing.navTo('list',{});
  }

}
