import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-exibir-acidentes',
  templateUrl: './exibir-acidentes.component.html',
  styleUrls: ['./exibir-acidentes.component.css']
})
export class ExibirAcidentesComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.retornarRegistroAcidentes();
  }

  
  onSubmit(){

  }
}
