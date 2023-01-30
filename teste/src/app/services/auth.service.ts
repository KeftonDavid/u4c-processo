import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioEmail: any = null;
  public usuarioPerfil: any = null;
  public acidentes: any = null;
  constructor(
    private http: HttpClient
  ) { }

  dadosUsuario(url: string){
    return this.http.get(url);
  }

  retornarDadosUsuario(){
    this.dadosUsuario('http://localhost:3000/perfil').subscribe(
      res => {
        console.log(res);
        this.usuarioPerfil = res;
        return res;
      }
    )
  }
 
  loginUsuario(email: string, senha: string, url: string){
    return this.http.post(url, { email, senha }, {responseType: 'text'} );
  }

  retornarLoginUsuario(email: string, senha: string){
    this.loginUsuario(email, senha,  'http://localhost:3000/login')
    .subscribe(res => {
      console.log(res);
      this.usuarioEmail = res;
      return this.usuarioEmail;
    })
  }

  encerrarSessao(url: string){
    return this.http.get(url)
  }

  retornarEncerrarSessao(){
    this.encerrarSessao('http://localhost:3000/perfil/logout').subscribe(
      res => {
        console.log(res);
        this.usuarioEmail = null;
        return this.usuarioEmail;
      }
    )
  }

  registroAcidentes(url: string){
    return this.http.get(url)
  }

  retornarRegistroAcidentes(){
    this.registroAcidentes('http://localhost:3000/acidentes').subscribe(
      res => {
        this.acidentes = res;
        return this.acidentes;
      }
    )
  }
}
