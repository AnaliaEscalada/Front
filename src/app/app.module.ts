import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionYExperienciaComponent } from './componentes/educacion-y-experiencia/educacion-y-experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import {HttpClientModule} from "@angular/common/http";
import { PorfolioService } from './servicios/porfolio.service';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionYExperienciaComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[{provide: APP_BASE_HREF, useValue: PorfolioService}],
  bootstrap: [AppComponent],
})
export class AppModule { }
