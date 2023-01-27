import { Component, OnInit } from '@angular/core';
import { FormularioConta } from './formulario-conta';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  formularioConta: FormularioConta;

  constructor() { }

  ngOnInit(): void {
    this.formularioConta = new FormularioConta();
  }

  onSubmit(nome: string, email: string, cpf: string, senha: string){
    console.log(nome, email, cpf, senha);
    this.formularioConta = new FormularioConta();
  }
}
