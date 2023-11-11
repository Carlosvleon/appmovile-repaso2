import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { ViewDidEnter,ViewDidLeave,ViewWillEnter,ViewWillLeave } from "@ionic/angular"
import {ServicioNuevoService} from './../servicio-nuevo.service'

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.page.html',
  styleUrls: ['./ciclo-vida.page.scss'],
})
export class CicloVidaPage implements OnInit, ViewDidEnter,ViewDidLeave,ViewWillEnter,ViewWillLeave {

  constructor(
    public nuServicio:ServicioNuevoService
  ) { 
    console.log("constructor")
  }

  ngOnInit():void {
    console.log("ngOnInit")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
  ionViewDidEnter():void{
    this.nuServicio.aumentar()
    console.log("ViewDidEnter")
  }
  ionViewDidLeave():void{
    console.log("ViewDidLeave")
    
  }
  ionViewWillEnter():void{
    console.log("ViewWillEnter")
    
  }
  ionViewWillLeave():void{
    console.log("ViewWillLeave")
    
  }
}
