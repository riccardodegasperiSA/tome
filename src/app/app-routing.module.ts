import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InserisciStoriaComponent } from './inserisci-storia/inserisci-storia.component';
import { ListaStorieComponent } from './lista-storie/lista-storie.component';
import { ModificaStoriaComponent } from './modifica-storia/modifica-storia.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { StoriaComponent } from './storia/storia.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"storie", component:ListaStorieComponent},
  {path:"storie/:id", component:StoriaComponent},
  {path:"storie/modifica/:id", component:ModificaStoriaComponent},
  {path:"aggiungi", component:InserisciStoriaComponent},
  {path:"pagina-non-trovata", component:PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
