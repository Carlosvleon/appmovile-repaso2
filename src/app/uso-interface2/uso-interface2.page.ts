import { Component, OnInit,  } from '@angular/core';
import { Servicio2Service } from '../servicios/servicio2.service'
import { ViewWillEnter } from '@ionic/angular'

@Component({
  selector: 'app-uso-interface2',
  templateUrl: './uso-interface2.page.html',
  styleUrls: ['./uso-interface2.page.scss'],
})
export class UsoInterface2Page implements OnInit {

  constructor(
    public serv2: Servicio2Service
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    console.log(this.serv2.obtenerUsuarios())
  }

}
