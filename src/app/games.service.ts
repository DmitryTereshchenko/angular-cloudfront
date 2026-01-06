import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private url: string = 'https://gamerpower.p.rapidapi.com/api/giveaways';

  private httpClient = inject(HttpClient);

  getData() {
    return this.httpClient.get(this.url, {
      headers: {
        'x-rapidapi-key': '7fb9bd786emsha7dbaceb1d5a830p1195eajsnbe00a0ab6c5a',
        'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
      }
    });
  }
}