import { Component, OnInit } from '@angular/core';
import { FormularioConta } from './formulario-conta';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  formularioConta: FormularioConta;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioConta = new FormularioConta();
  }

  registrarUsuario(nome: string, email: string, cpf: number, senha: string, url: string){
    return this.http.post(url, { nome, email, cpf, senha }, {responseType: 'text'} );
  }

  onSubmit(nome: string, email: string, cpf: number, senha: string){
    this.registrarUsuario(nome, email, cpf, senha, "http://localhost:3000/registrousuario")
    .subscribe(res=>{
      console.log(res);
      return res;
    })
    this.formularioConta = new FormularioConta();
    this.router.navigate(['/login']);
  }
}
