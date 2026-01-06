import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GamesService } from './games.service';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('search') searchInput!: ElementRef<HTMLInputElement>;

  data: any[] = [];

  filteredData: any[] = [];

  private gamesService = inject(GamesService);

  ngOnInit() {
    this.gamesService.getData().subscribe((data) => {
      this.data = data as any[];
      this.filteredData = this.data;
    });
  }

  ngAfterViewInit() {
    console.log(this.searchInput);
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        tap((d) => console.log(d)),
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged(),
        map((searchTerm: string) => this.data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))),
      ).subscribe((data: any[]) => {
        this.filteredData = data;
      });
  }
}
