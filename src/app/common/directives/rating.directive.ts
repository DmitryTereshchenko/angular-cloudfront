import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRating]'
})
export class Rating implements OnInit {
  @Input() ratingValue!: number | 'N/A';

  private readonly element: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    if (this.ratingValue === 'N/A') {
      this.element.nativeElement.style.backgroundColor = 'gray';
      return;
    }

    this.element.nativeElement.style.backgroundColor = this.ratingValue > 75 ? 'green' : this.ratingValue > 50 ? 'orange' : 'red';
  }
}
