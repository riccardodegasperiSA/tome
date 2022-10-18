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
    return this._storie.find(s => s.id === id)
  }

  addStoria(storia: Storia) {
    this._storie.push(storia)
    this.router.navigate(["/storie"])
  }

  removeStoria(id?: number) {
    this._storie = this._storie.filter(s => s.id !== id)
  }

  modificaStoria(storia: Storia) {
    this.removeStoria(storia.id)
    this.addStoria(storia)
  }

  getStorieList() {
    return this.http.get<Storia[]>(this.baseUrl + "storie").pipe(map(s => {
      const listaStorie = [...s]
      return listaStorie
    }))
  }

}
