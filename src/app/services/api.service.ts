import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://v3.football.api-sports.io/standings';
  private apiKey = '183bf0b254f74d82ce22f458d27007dd';

  constructor(private http: HttpClient) {}

  getStandings(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      league: '2',
      season: '2023'
    };

    return this.http.get(this.apiUrl, { headers, params });
  }
}
