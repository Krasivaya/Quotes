import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {}
  @HostListener("click") onClicks() {
    this.hColor("red");
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.hColor("white");
  }
  private hColor(action: string) {
    this.elem.nativeElement.style.color = action;
  }

}
