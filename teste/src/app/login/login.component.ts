import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormularioConta } from '../criar-conta/formulario-conta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormularioConta;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.login = new FormularioConta();
  }

  loginUsuario(email: string, senha: string, url: string){
    return this.http.post(url, { email, senha }, {responseType: 'text'} );
  }

  onSubmit(email: string, senha: string){
    console.log(email, senha);
    this.loginUsuario(email, senha, "http://localhost:3000/login")
    .subscribe(res => {
      console.log(res);
      return res;
      
    })
    this.login = new FormularioConta();
  }
}
