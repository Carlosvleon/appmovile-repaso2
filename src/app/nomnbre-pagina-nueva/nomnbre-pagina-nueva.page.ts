import { Component, OnInit } from '@angular/core';
import { Iejemplo } from "./interfaz/Iejemplo"

@Component({
  selector: 'app-nomnbre-pagina-nueva',
  templateUrl: './nomnbre-pagina-nueva.page.html',
  styleUrls: ['./nomnbre-pagina-nueva.page.scss'],
})
export class NomnbrePaginaNuevaPage implements OnInit {
  public interfaz: Iejemplo []=[
    {
      id:1,
      titulo:"hola",
      comentario:"hao",
      estado:true
    },
    {
      id:2,
      titulo:"holi",
      comentario:"chai",
      estado:false
    },
    {
      id:3,
      titulo:"hola",
      comentario:"hao",
      estado:true
    },
    {
      id:4,
      titulo:"holi",
      comentario:"chai",
      estado:false
    },
  ]

  public get productosActivos(){
    return this.interfaz.filter(nombreVar => nombreVar.estado === true)
  }

  public get productosInActivos(){
    return this.interfaz.filter(nombreVar => nombreVar.estado === false)
  }

  constructor() { }



  ngOnInit() {
  }

}
