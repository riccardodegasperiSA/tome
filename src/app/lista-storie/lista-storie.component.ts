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
  subscription?: Subscription

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
    this.subscription = this.storiaService.storieObservable.subscribe(s => {
      this.storie = s
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onVaiStoria(id:number) {
    this.router.navigate(["/storie/" + id])
  }

  onDeleteStoria(id:number) {
    this.storiaService.removeStoria(id)
    this.ngOnDestroy()
    this.ngOnInit()
  }

}
