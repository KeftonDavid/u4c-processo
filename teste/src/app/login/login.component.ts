import { Component, OnInit } from '@angular/core';
import { FormularioConta } from '../criar-conta/formulario-conta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormularioConta;

  constructor() { }

  ngOnInit(): void {
    this.login = new FormularioConta();
  }

  onSubmit(email: string, senha: string){
    console.log(email, senha);
    this.login = new FormularioConta();
  }
}
