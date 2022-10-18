import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storia } from './dati/storia.data';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorieServiceService {
  private baseUrl = "http://localhost:8080/tome/"

  private _storie: Storia[] = [
    // {id:1, title:"Titolo", content:"Il contenuto della prima storia", summary:"Sommario prima storia"},
    // {id:2, title:"Un titolo", content:"Il contenuto della seconda storia", summary:"Sommario seconda storia"},
  ]

  constructor(private http: HttpClient, private router: Router) { }

  get storie(): Storia[] {
    return [...this._storie]
  }

  cercaStoria(id: number) {
    return this.http.get<Storia>(this.baseUrl+"storie/"+id).pipe(map(s => {
      const storia = {...s}
      return(storia)
    }))
  }

  addStoria(storia: Storia) {
    return this.http.post(this.baseUrl + "storie/create",storia)
  }

  removeStoria(id?: number) {
    return this.http.post(this.baseUrl + "storie/delete/", id)
  }

  modificaStoria(storia: Storia) {
    return this.http.post(this.baseUrl + "storia/update", storia)
  }

  getStorieList() {
    return this.http.get<Storia[]>(this.baseUrl + "storie").pipe(map(s => {
      const listaStorie = [...s]
      return listaStorie
    }))
  }

}
