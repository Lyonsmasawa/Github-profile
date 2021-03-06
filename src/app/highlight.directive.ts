import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.highLightTxt("red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.highLightTxt("white")
  }

  private highLightTxt(action:string){
    this.elem.nativeElement.style.color=action;

  }

}
