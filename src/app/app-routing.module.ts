import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InserisciStoriaComponent } from './inserisci-storia/inserisci-storia.component';
import { ListaStorieComponent } from './lista-storie/lista-storie.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"storie", component:ListaStorieComponent},
  {path:"inserisci", component:InserisciStoriaComponent},
  {path:"pagina-non-trovata", component:PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
