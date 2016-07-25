import { Directive, Input ,OnInit} from '@angular/core';
import { TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
@Directive({
  selector: '[myUnless]',
})
export class UnlessDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {
    // this.onLoad.bind(this)
  }

  ngOnInit(){
    console.log("ngOnInit");
    //console.log(this.templateRef);
    //console.log(this.elementRef.nativeElement);



    //this.templateRef.createEmbeddedView('<p>abcd</p>')

    //ElementRef elementRef = new ElementRef();
    //this.templateRef.createEmbeddedView(elementRef);

     this.viewContainer.createEmbeddedView(this.templateRef);
  }


  //@Input() set myUnless(condition: boolean) {
  //  console.log("set myUnless: " + condition);
  //  if (condition) {
  //    this.viewContainer.clear();
  //  }
  //}
}
