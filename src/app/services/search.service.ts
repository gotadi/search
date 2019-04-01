import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Search} from '../models/search';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  fetchData(keyword: string): Observable<Search[]> {
    const apiUri = `${environment.apiUri}/search?query=${keyword}`;
    return this.http.get<Search[]>(apiUri);
  }
}
