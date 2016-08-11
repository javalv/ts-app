import {Component} from '@angular/core';
@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    <input [(ngModel)]="name">
    <p>name:{{name}}</p>
  `
})
export class LoopbackComponent {

  values = '';

  // without strong typing
  onKey(event:any) {
    console.log(event)
    this.values += event.target.value + ' | ';
  }

}
