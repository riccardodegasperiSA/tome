import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storia } from '../dati/storia.data';
import { StorieServiceService } from '../storie-service.service';

@Component({
  selector: 'app-lista-storie',
  templateUrl: './lista-storie.component.html',
  styleUrls: ['./lista-storie.component.css']
})
export class ListaStorieComponent implements OnInit {

  storie: Storia[] = [
    {id:1, title:"Titolo", content:"Il contenuto della prima storia"},
    {id:2, title:"Un titolo", content:"Il contenuto della seconda storia"},
  ]

  constructor(private storiaService:StorieServiceService) { }

  ngOnInit(): void {
    this.storiaService.getStorieList().subscribe({
      next: s => {
        this.storie = s
      },
      error: err => {
        console.log("error")
      },
      complete:() => {
        console.log("complete")
      }
    })
  }

  ngOnDestroy(): void {
    
  }

}
