import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {IUser} from './../uso-interface2/entidades/Iusuarios'

@Injectable({
  providedIn: 'root'
})
export class Servicio2Service {
  public cargando = false;
  public usuarios: IUser[] = [];
  private readonly URL_USUARIO = 'https://jsonplaceholder.typicode.com/users';
  public valor =0;
  constructor( 
    private http:HttpClient
    ) { }
  public obtenerUsuarios(){
     this.http.get<IUser[]>(this.URL_USUARIO).subscribe(datos => {
      this.usuarios = datos;

      this.cargando = false;
      console.log(datos);
     })
  }
}
