import { Component, OnInit, Input } from '@angular/core';
import { Iejemplo } from '../interfaz/Iejemplo';

@Component({
  selector: 'app-comp2-inactivos',
  templateUrl: './comp2-inactivos.component.html',
  styleUrls: ['./comp2-inactivos.component.scss'],
})
export class Comp2InactivosComponent  implements OnInit {

  @Input()
  public inactivos:Iejemplo[] = []

  constructor() { }

  ngOnInit() {}

}
