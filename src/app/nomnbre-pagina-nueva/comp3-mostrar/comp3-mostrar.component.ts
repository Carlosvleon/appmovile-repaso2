import { Component, OnInit, Input } from '@angular/core';
import { Iejemplo } from "../interfaz/Iejemplo";

@Component({
  selector: 'app-comp3-mostrar',
  templateUrl: './comp3-mostrar.component.html',
  styleUrls: ['./comp3-mostrar.component.scss'],
})
export class Comp3MostrarComponent  implements OnInit {

  @Input()
  public post!: Iejemplo;
  constructor() { }

  ngOnInit() {}

}
