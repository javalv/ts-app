import {Component} from '@angular/core';
import { UnlessDirective } from './myDirective';
@Component({
  templateUrl: 'build/pages/directives/main.html',
  directives:[UnlessDirective]
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
    },2000)
  }

}
