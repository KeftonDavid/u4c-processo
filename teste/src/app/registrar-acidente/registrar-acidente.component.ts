import { Component, OnInit } from '@angular/core';
import { FormularioAcidente } from './formulario-acidente';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.formularioAcidente = new FormularioAcidente;
  }

  addTerceiro(){
    this.terceiros.push('');
  }

  registrarAcidente(donoVeiculo: string, modelo: string, ano: number, placa: string, descricaoAcidente: string, url: string){
    return this.http.post(url, { donoVeiculo, modelo, ano, placa, descricaoAcidente}, {responseType: 'text'} );
  }

  onSubmit(donoVeiculo: string, modelo: string, ano: number, placa: string, descricaoAcidente: string){
    this.registrarAcidente(donoVeiculo, modelo, ano, placa, descricaoAcidente, 'http://localhost:3000/registroacidente')
    .subscribe(res => {
      console.log(res);
      return res;
    })
    
    console.log(donoVeiculo, modelo, ano, placa, descricaoAcidente);
    this.formularioAcidente = new FormularioAcidente;
  }

}
