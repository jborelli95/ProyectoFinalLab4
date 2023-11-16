import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlS = 'https://v3.football.api-sports.io/standings';
  private apiUrlF = 'https://v3.football.api-sports.io/fixtures';
  private apiUrlTeams = 'https://v3.football.api-sports.io/teams?league=2&season=2023';
  private apiUrlPlayers = 'https://v3.football.api-sports.io/players?league=2&season=2023';
  private apiUrlTeamsStatics = 'https://v3.football.api-sports.io/teams/statistics'
  //**Api key de Ari */
  //private apiKey = '183bf0b254f74d82ce22f458d27007dd';

  /**Api key de Juan */
  //private apiKey = '19756ffe17dee2fa6d046d0ccff19d55';
  //**Api key de Juan 2 */
  private apiKey = '401fee78d97a2865fe3cdaea0b0d099a';


  constructor(private http: HttpClient) { }

  getStandings(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      league: '2',
      season: '2023'
    };

    return this.http.get(this.apiUrlS, { headers, params });
  }

  getFixtures(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      league: '2',
      season: '2023',
      from: '2023-09-19',
      to: '2023-12-13'
    };

    return this.http.get(this.apiUrlF, { headers, params });
  }

  //**Obteners los equipos de la UEFA seaosn 2023 */
  getTeamsUEFA(): Observable<any> {
    //**Primero armamos un header */
    const headers = new HttpHeaders({
      /**la url de api-football */
      'x-rapidapi-host': 'v3.football.api-sports.io',
      /**nuestra key vinculada a nuestra cuenta */
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      /**Que parametros queremos??? */
      /**season id 2 - Uefa */
      league: '2',
      /**la season 2023 */
      season: '2023'
    };

    return this.http.get(this.apiUrlTeams, { headers, params });

  }

  //**Obteners los jugadores de la UEFA seaosn 2023 */
  getPlayersUEFA(){
    const headers = new HttpHeaders({
      /**la url de api-football */
      'x-rapidapi-host': 'v3.football.api-sports.io',
      /**nuestra key vinculada a nuestra cuenta */
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      /**Que parametros queremos??? */
      /**season id 2 - Uefa */
      league: '2',
      /**la season 2023 */
      season: '2023'
    };

    return this.http.get(this.apiUrlPlayers, { headers, params });
  }

  /**Get teqam data from a specific season */
  getTeamStaticsById(IdTeam:number){
    const headers = new HttpHeaders({
      /**la url de api-football */
      'x-rapidapi-host': 'v3.football.api-sports.io',
      /**nuestra key vinculada a nuestra cuenta */
      'x-rapidapi-key': this.apiKey
    });

    const params = {
      /**Que parametros queremos??? */
      /**season id 2 - Uefa */
      league: '2',
      /**la season 2023 */
      season: '2023',
      team: IdTeam
    };

    return this.http.get(this.apiUrlTeamsStatics, { headers, params });
  }
}
