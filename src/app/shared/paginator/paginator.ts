import { Component, EventEmitter, input, Input, InputSignal, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator implements OnInit {
  @Input() totalItems: number = 0;
  @Output() pageChanged = new EventEmitter<number>();

  currentPage: number = 1;
  totalPages: number[] = [];

  ngOnInit(): void {
    this.totalPages = Array.from({ length: Math.ceil(this.totalItems / 10) }, (_, i) => i + 1);
    console.log(this.totalItems);
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}
