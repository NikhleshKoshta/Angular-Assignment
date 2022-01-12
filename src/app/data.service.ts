import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public baseUrl: any;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://help-search-api-prod.herokuapp.com/search';
  }

  // get(key): Observable<Data> {
  //   return this.http.get<Data>(this.baseUrl);
  // }

  getData(key): Observable<Data> {
    return this.http.get<Data>(`${this.baseUrl}?query=${key}`);
  }

}
