import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorieServiceService } from '../storie-service.service';

@Component({
  selector: 'app-inserisci-storia',
  templateUrl: './inserisci-storia.component.html',
  styleUrls: ['./inserisci-storia.component.css']
})
export class InserisciStoriaComponent implements OnInit {

  aggiungiForm: FormGroup

  constructor(private storiaService:StorieServiceService) {
    this.aggiungiForm = new FormGroup({
      "id": new FormControl(1, Validators.required),
      "title": new FormControl(null, Validators.required),
      "summary": new FormControl(null, Validators.required),
      "content": new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {
  }

  aggiungiStoria() {
    this.storiaService.addStoria(this.aggiungiForm.value)
  }

}
