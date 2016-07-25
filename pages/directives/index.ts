import {Component} from '@angular/core';
//import { UnlessDirective } from './myDirective';
import { MyComponent } from './myComponet';
@Component({
  templateUrl: 'build/pages/directives/main.html',
  directives:[MyComponent]
  // providers:[UnlessDirective]
})
export class MyDirectiveTest {
  loaded:boolean;
  constructor() {
    this.loaded = false;
  }

  ionViewWillEnter( ){
    setTimeout(() => {
      this.loaded = true;
    },10000)
  }

}
