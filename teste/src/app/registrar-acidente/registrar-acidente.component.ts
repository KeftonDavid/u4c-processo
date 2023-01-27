import { Component, OnInit } from '@angular/core';
import { FormularioAcidente } from './formulario-acidente';

@Component({
  selector: 'app-registrar-acidente',
  templateUrl: './registrar-acidente.component.html',
  styleUrls: ['./registrar-acidente.component.css']
})
export class RegistrarAcidenteComponent implements OnInit {

  terceiros: string [] = [
    '',
  ]
  
  formularioAcidente: FormularioAcidente;

  constructor() { }

  ngOnInit(): void {
    this.formularioAcidente = new FormularioAcidente;
  }

  addTerceiro(){
    this.terceiros.push('');
  }

  removerTerceiro(){
    if(this.terceiros.length > 1){
      this.terceiros.pop();
      this.formularioAcidente.terceiro.cpf.pop();
      this.formularioAcidente.terceiro.nome.pop();
    }
  }

  onSubmit(donoVeiculo: string, modelo: string, ano: number, placa: string, nome: string[], cpf: string[], descricaoAcidente: string){
    console.log(donoVeiculo, modelo, ano, placa, nome, cpf, descricaoAcidente);
    this.formularioAcidente = new FormularioAcidente;
  }

}
