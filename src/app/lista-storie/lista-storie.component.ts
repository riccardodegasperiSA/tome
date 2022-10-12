import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
    // this.storiaService.getStorieList().subscribe({
    //   next: s => {
    //     this.storie = s
    //   },
    //   error: err => {
    //     console.log("error")
    //   },
    //   complete:() => {
    //     console.log("complete")
    //   }
    // })
    this.storie = this.storiaService.storie
  }

  ngOnDestroy(): void {
    
  }

  onVaiStoria(id:number) {
    this.router.navigate(["/storie/" + id])
  }

}
