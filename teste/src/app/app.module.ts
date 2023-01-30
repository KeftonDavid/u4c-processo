import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarAcidenteComponent } from './registrar-acidente/registrar-acidente.component';
import { LoginComponent } from './login/login.component';
import { ExibirAcidentesComponent } from './exibir-acidentes/exibir-acidentes.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    PerfilComponent,
    RegistrarAcidenteComponent,
    LoginComponent,
    ExibirAcidentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
