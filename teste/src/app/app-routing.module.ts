import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarAcidenteComponent } from './registrar-acidente/registrar-acidente.component';

const routes: Routes = [
  { path: 'criarConta', component: CriarContaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'registrarAcidente', component: RegistrarAcidenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
