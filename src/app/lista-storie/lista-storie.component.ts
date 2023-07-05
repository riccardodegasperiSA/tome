import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Subscribable, Subscription } from 'rxjs';
import { Storia } from '../dati/storia.data';
import { StorieServiceService } from '../storie-service.service';

@Component({
  selector: 'app-lista-storie',
  templateUrl: './lista-storie.component.html',
  styleUrls: ['./lista-storie.component.css']
})
export class ListaStorieComponent implements OnInit {

  storie: Storia[] = []

  constructor(private storiaService:StorieServiceService, private router:Router) { }

  estraiStorie(): void {
    this.storiaService.getStorieList().subscribe(s => {
      this.storie = s
    })
  }

  ngOnInit(): void {
    this.estraiStorie()
  }

  ngOnDestroy(): void {
  }

  onVaiStoria(id:number) {
    this.router.navigate(["/storie/" + id])
  }

  onDeleteStoria(id:number) {
    this.storiaService.removeStoria(id).subscribe()
    this.storie = this.storie.filter(s => s.id !== id)
  }

  onModificaStoria(id:number) {
    this.router.navigate(["/storie/modifica/" + id])
  }

}
