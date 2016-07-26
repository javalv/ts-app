import {Component, OnInit,OnChanges} from '@angular/core';
import {TemplateRef, ViewContainerRef, ElementRef, Input, SimpleChange} from '@angular/core';
import {UnlessDirective} from './myDirective';

@Component({
  selector: 'hero-app',
  template: ` <div *ngIf="!loaded">
                 <p>loading...</p>
                </div>`,
  //styles: ['h1 { font-weight: normal; }'],
  directives: [UnlessDirective]
})
export class MyComponent implements OnInit, OnChanges {

  constructor(//private templateRef: TemplateRef<any>,
              private elementRef:ElementRef,
              private viewContainer:ViewContainerRef) {
  }

  ngOnInit() {
    //console.log("ngOnInit");
    console.log(this.viewContainer);
    console.log(this.elementRef.nativeElement);

    //ElementRef elementRef = new ElementRef();
    //this.templateRef.createEmbeddedView(elementRef);

    // this.viewContainer.createEmbeddedView(this.elementRef);

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
