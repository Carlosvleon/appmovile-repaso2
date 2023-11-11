import { Component } from '@angular/core';
import { ServicioNuevoService} from "../servicio-nuevo.service"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contador: number = 0;

  constructor(
    public nuServicio: ServicioNuevoService
  ) {}

	public aumentarContador():void{
		this.contador = this.contador + 1;
	}

  public get aumentarFuente():string{
    return 'font-size:'+this.contador+'px;'
  }
}
