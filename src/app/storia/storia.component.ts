import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Storia } from '../dati/storia.data';
import { StorieServiceService } from '../storie-service.service';

@Component({
  selector: 'app-storia',
  templateUrl: './storia.component.html',
  styleUrls: ['./storia.component.css']
})
export class StoriaComponent implements OnInit {

  storia?: Storia

  constructor(private route: ActivatedRoute, private storiaService: StorieServiceService) {
    const { id } = route?.snapshot?.params ?? {}
    this.storiaService.cercaStoria(Number(id)).subscribe(s => {
      this.storia = s
    })
    // this.storia = storiaService.cercaStoria(Number(id))

  }

  ngOnInit(): void {

  }

}
