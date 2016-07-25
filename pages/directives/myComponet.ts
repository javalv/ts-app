import { Component,OnInit,Injectable} from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import {UnlessDirective} from './myDirective';

@Component({
    selector: 'hero-app',
    template: ` <div {{loaded}}>
                 <p>loading...</p>
                </div>`,
    //styles: ['h1 { font-weight: normal; }'],
    directives:[UnlessDirective]
})
export class MyComponent implements OnInit{

    constructor(
        //private templateRef: TemplateRef<any>,
        private elementRef: ElementRef,
        private viewContainer: ViewContainerRef
    ) {
    }

    ngOnInit(){
        //console.log("ngOnInit");
        console.log(this.viewContainer);
        console.log(this.elementRef.nativeElement);



        //this.templateRef.createEmbeddedView('<p>abcd</p>')

        //ElementRef elementRef = new ElementRef();
        //this.templateRef.createEmbeddedView(elementRef);

         //this.viewContainer.createEmbeddedView(this.elementRef);

    }

    @Input()
    set loaded(condition: boolean) {
        console.log("set myUnless: " + condition);
        if (condition) {
            this.viewContainer.clear();
        }
    }


}
