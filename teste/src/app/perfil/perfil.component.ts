import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;

  constructor(
    private http: HttpClient,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.retornarDadosUsuario();
  }


  onSubmit(){
    this.auth.retornarEncerrarSessao()
    this.router.navigate(["/login"]);
  }

}
