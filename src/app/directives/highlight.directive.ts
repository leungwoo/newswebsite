import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight');
  }
}
