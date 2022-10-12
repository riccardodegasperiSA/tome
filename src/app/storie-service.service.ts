import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storia } from './dati/storia.data';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorieServiceService {
  private baseUrl = "http://127.0.0.1:8080/tome/"

  private _storie: Storia[] = [
    {id:1, title:"Titolo", content:"Il contenuto della prima storia", summary:"Sommario prima storia"},
    {id:2, title:"Un titolo", content:"Il contenuto della seconda storia", summary:"Sommario seconda storia"},
  ]

  constructor(private http: HttpClient, private router: Router) { }

  // getStorieList(): Observable<any> {
  //   return this.http.get(this.baseUrl + "storie")
  // }

  get storie(): Storia[] {
    return [...this._storie]
  }

  cercaStoria(id: number) {
    return this._storie.find(s => s.id === id)
  }

  addStoria(storia: Storia) {
    this._storie.push(storia)
    this.router.navigate(["/storie"])
  }
}
