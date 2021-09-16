import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  URL = environment.api_url + '/players';

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.httpClient.get(`${ this.URL }/all`);
  }

  // Search example: /players/search?firstName=Cris&lastName=Ron
  getPlayersByName(firstName: string, lastName: string): Observable<any> {
    return this.httpClient.get(`${ this.URL }/search?firstName=${ firstName }&lastName=${ lastName }`);
  }

  getPlayerById(id: number): Observable<any> {
    return this.httpClient.get(`${ this.URL }/${ id }`);
  }

  addPlayer(player: Player): Observable<any> {
    player.id = 0;
    return this.httpClient.post(`${ this.URL }/insert`, player);
  }

  updatePlayer(player: Player): Observable<any> {
    return this.httpClient.put(`${ this.URL }/update`, player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.httpClient.delete(`${ this.URL }/${ id }/delete`);
  }
}
