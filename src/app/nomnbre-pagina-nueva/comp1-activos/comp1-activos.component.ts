import { Component, OnInit, Input } from '@angular/core';
import { Iejemplo } from '../interfaz/Iejemplo';

@Component({
  selector: 'app-comp1-activos',
  templateUrl: './comp1-activos.component.html',
  styleUrls: ['./comp1-activos.component.scss'],
})
export class Comp1ActivosComponent  implements OnInit {

  @Input()
  public activo:Iejemplo[] = []

  constructor() { }

  ngOnInit() {}

}
