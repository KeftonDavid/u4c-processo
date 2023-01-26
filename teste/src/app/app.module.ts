import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarAcidenteComponent } from './registrar-acidente/registrar-acidente.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    PerfilComponent,
    RegistrarAcidenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
