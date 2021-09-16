import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  URL = environment.api_url + '/teams';

  constructor(private httpClient: HttpClient) { }

  getAllTeams(): Observable<any> {
    return this.httpClient.get(`${ this.URL }/all`);
  }

  getTeamsByName(name: string): Observable<any> {
    return this.httpClient.get(`${ this.URL }/search/${ name }`);
  }

  getTeamById(id: number): Observable<any> {
    return this.httpClient.get(`${ this.URL }/${ id }`);
  }

  addTeam(team: Team): Observable<any> {
    team.id = 0;
    return this.httpClient.post(`${ this.URL }/insert`, team);
  }

  updateTeam(team: Team): Observable<any> {
    return this.httpClient.put(`${ this.URL }/update`, team);
  }

  deleteTeam(id: number): Observable<any> {
    return this.httpClient.delete(`${ this.URL }/${ id }/delete`);
  }
}
