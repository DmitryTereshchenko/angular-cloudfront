import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { GamesService } from './games.service';
import { debounceTime, delay, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Rating } from "./common";
import { Paginator } from "./shared/paginator/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [DatePipe, Rating, Paginator],
})
export class App implements OnInit {
  @ViewChild('search') searchInput!: ElementRef<HTMLInputElement>;

  data: any[] = [];

  isLoading: boolean = false;

  private gamesService = inject(GamesService);

  ngOnInit() {
    this.getData();
  }

  onPageChanged(page: number) {
    this.getData(page);
  }

  getData(page: number = 1) {
    this.isLoading = true;
    this.gamesService.getData({ page }).pipe(delay(1000)).subscribe((data: any[]) => {
      this.data = data;
      this.isLoading = false;
    });
  }
}
