import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private url: string = 'https://api.rawg.io/api/games';

  private httpClient = inject(HttpClient);

  getData(params: { page: number }) {
    return this.httpClient.get(this.url, { params: { page: params.page, page_size: 100 } }).pipe(
      map((response: any) => response.results)
    );
  }
}