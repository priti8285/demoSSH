import { Directive ,ElementRef,OnInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() appCustom = "";

  

  constructor(private el: ElementRef) {
       el.nativeElement.style.color="red";
      // el.nativeElement.style.display="none";
   }
   @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appCustom);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
 
 


}
