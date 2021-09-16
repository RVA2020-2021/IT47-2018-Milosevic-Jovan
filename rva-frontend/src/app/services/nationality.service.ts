import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nationality } from '../models/nationality';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  URL = environment.api_url + '/nationalities';

  constructor(private httpClient: HttpClient) { }

  getAllNationalities(): Observable<any> {
    return this.httpClient.get(`${ this.URL }/all`);
  }

  getNationalitiesByName(name: string): Observable<any> {
    return this.httpClient.get(`${ this.URL }/search/${ name }`);
  }

  getNationalityById(id: number): Observable<any> {
    return this.httpClient.get(`${ this.URL }/${ id }`);
  }

  addNationality(nationality: Nationality): Observable<any> {
    nationality.id = 0;
    return this.httpClient.post(`${ this.URL }/insert`, nationality);
  }

  updateNationality(nationality: Nationality): Observable<any> {
    return this.httpClient.put(`${ this.URL }/update`, nationality);
  }

  deleteNationality(id: number): Observable<any> {
    return this.httpClient.delete(`${ this.URL }/${ id }/delete`);
  }
}
