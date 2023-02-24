import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'a[appExternalLink]',
  standalone: true,
})
export class ExternalLinkDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element: HTMLElement = this.el.nativeElement;
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener');
  }
}
