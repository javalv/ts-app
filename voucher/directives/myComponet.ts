import {Component, OnInit, OnChanges} from '@angular/core';
import {ViewContainerRef, ElementRef, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'loading-div',
  template: ` <div *ngIf="!loaded">
                  <div class="loading" ></div>
                </div>`,
  styles: [`div.loading{    
                position: absolute;
                top: 0px;
                bottom: 0px;
                z-index: 65535;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.25); 
           }`]
})
export class MyComponent implements OnInit, OnChanges {

  constructor(private elementRef:ElementRef,
              private viewContainer:ViewContainerRef) {

  }

  ngOnInit() {
    //
  }

  @Input() loaded:boolean;
  ngOnChanges(changes:{[propertyName:string]:SimpleChange}) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      if (propName == 'loaded' && cur == 'true') {
        this.elementRef.nativeElement
      }
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }


}
