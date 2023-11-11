import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, delay } from 'rxjs';
import { UsuarioLogeado } from '../modelos/usuariosLogeados';
@Injectable({
  providedIn: 'root'
})
export class ServAuthService {
  private cargando : BehaviorSubject<boolean> = new BehaviorSubject(false);
  public $cargando = this.cargando.asObservable();
  private usuarioActivo: BehaviorSubject<UsuarioLogeado | null> = new BehaviorSubject<UsuarioLogeado | null>(null);
  public $usuarioActivo = this.usuarioActivo.asObservable();
  private readonly URL_LOGIN = "https://dummyjson.com/docs/auth";
  constructor(private http: HttpClient) { }

  public intentarLogear(usuario:string, password:string){
    this.http.post<UsuarioLogeado>(this.URL_LOGIN, JSON.stringify({
      username: usuario,
      password: password
    }),
    {
      headers:{
        "Content-Type":"application/json"
      }
    }
    )
    .pipe(delay(2000))
    .subscribe(resultado => {
      this.usuarioActivo.next(resultado);
      this.cargando.next(false);
    })
  }
}
