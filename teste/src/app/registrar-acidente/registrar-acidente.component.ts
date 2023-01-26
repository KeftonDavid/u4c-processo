import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-acidente',
  templateUrl: './registrar-acidente.component.html',
  styleUrls: ['./registrar-acidente.component.css']
})
export class RegistrarAcidenteComponent implements OnInit {

  terceiros: string [] = [
    '',
  ]

  donoVeiculo: string;
  modelo: string;
  ano: number;
  placa: string = '';
  terceiro = {
    nome: [''],
    cpf: ['']
  }
  descricaoAcidente: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  addTerceiro(){
    this.terceiros.push('');
  }

  removerTerceiro(){
    if(this.terceiros.length > 1)
    this.terceiros.pop();
    this.terceiro.cpf.pop();
    this.terceiro.nome.pop();
  }

  onSubmit(donoVeiculo: string, modelo: string, ano: number, placa: string, nome: string[], cpf: string[], descricaoAcidente: string){
    console.log(donoVeiculo, modelo, ano, placa, nome, cpf, descricaoAcidente);
    
  }

}
