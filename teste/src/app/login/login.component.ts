import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioConta } from '../criar-conta/formulario-conta';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormularioConta;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.login = new FormularioConta();
  }

  onSubmit(email: string, senha: string){
    this.auth.retornarLoginUsuario(email, senha)
    this.login = new FormularioConta();
    this.router.navigate(['/perfil']);
  }
}
