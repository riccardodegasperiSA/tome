import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storia } from './dati/storia.data';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorieServiceService {
  private baseUrl = "localhost:8080/"

  constructor(private http: HttpClient) { }

  getStorieList(): Observable<any> {
    return this.http.get(this.baseUrl + "storie")
  }
}
