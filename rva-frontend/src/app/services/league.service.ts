import { League } from './../models/league';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  URL = environment.api_url + '/leagues';

  constructor(private httpClient: HttpClient) { }

  getAllLeagues(): Observable<any> {
    return this.httpClient.get(`${ this.URL }/all`);
  }

  getLeaguesByName(name: string): Observable<any> {
    return this.httpClient.get(`${ this.URL }/search/${ name }`);
  }

  getLeagueById(id: number): Observable<any> {
    return this.httpClient.get(`${ this.URL }/${ id }`);
  }

  addLeague(league: League): Observable<any> {
    league.id = 0;
    return this.httpClient.post(`${ this.URL }/insert`, league);
  }

  updateLeague(league: League): Observable<any> {
    return this.httpClient.put(`${ this.URL }/update`, league);
  }

  deleteLeague(id: number): Observable<any> {
    return this.httpClient.delete(`${ this.URL }/${ id }/delete`);
  }
}
