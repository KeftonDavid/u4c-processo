import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarAcidenteComponent } from './registrar-acidente/registrar-acidente.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'criarConta', component: CriarContaComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'registrarAcidente', component: RegistrarAcidenteComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
