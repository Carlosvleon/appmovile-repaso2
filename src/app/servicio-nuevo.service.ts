import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioNuevoService {
  public valor = 0;

  constructor() { }

  public aumentar(){
    this.valor = this.valor + 1;
  }
  public disminuir(){
    this.valor = this.valor - 1;
  }
}
