import {Directive, OnInit, OnChanges} from '@angular/core';
import {ViewContainerRef, ElementRef, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[queue]'
})
export class Queue implements OnInit {

  constructor() {
  }

  ngOnInit() {
    //
  }


  @Output()
  onVoted = new EventEmitter<boolean>();
  @Input()
  set take(condition:any) {
    console.log("set take: " + condition);
    this.onVoted.emit(true);
  }

}
