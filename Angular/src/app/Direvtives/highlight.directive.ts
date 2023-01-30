import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


 constructor(public elm:ElementRef) { 
  this.elm.nativeElement.style.backgroundColor="darkturquoise";
  this.elm.nativeElement.style.fontWeight="bold";
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elm.nativeElement.style.backgroundColor="dodgerblue";
    this.elm.nativeElement.style.color="white"
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.elm.nativeElement.style.backgroundColor="darkturquoise";
  }
}


