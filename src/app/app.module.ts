import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaStorieComponent } from './lista-storie/lista-storie.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { InserisciStoriaComponent } from './inserisci-storia/inserisci-storia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoriaComponent } from './storia/storia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaStorieComponent,
    PaginaNonTrovataComponent,
    InserisciStoriaComponent,
    StoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
