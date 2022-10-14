import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storia } from '../dati/storia.data';
import { StorieServiceService } from '../storie-service.service';

@Component({
  selector: 'app-modifica-storia',
  templateUrl: './modifica-storia.component.html',
  styleUrls: ['./modifica-storia.component.css']
})
export class ModificaStoriaComponent implements OnInit {
  modificaForm: FormGroup
  storia?:Storia

  constructor(private storiaService:StorieServiceService, private route: ActivatedRoute, private router:Router) {
    const { id } = route?.snapshot?.params ?? {}
    this.storia = storiaService.cercaStoria(Number(id))

    this.modificaForm = new FormGroup({
      "id": new FormControl(this.storia?.id, Validators.required),
      "title": new FormControl(this.storia?.title, Validators.required),
      "summary": new FormControl(this.storia?.summary, Validators.required),
      "content": new FormControl(this.storia?.content, Validators.required),
    })
  }

  ngOnInit(): void {
  }

  modificaStoria() {
    const id = this.storia?.id
    this.storiaService.removeStoria(id)
    this.storiaService.addStoria(this.modificaForm.value)
  }

  onAnnulla() {
    this.router.navigate(["/storie"])
  }

}

