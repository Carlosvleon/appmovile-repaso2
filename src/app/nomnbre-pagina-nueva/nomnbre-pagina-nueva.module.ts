import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomnbrePaginaNuevaPageRoutingModule } from './nomnbre-pagina-nueva-routing.module';

import { NomnbrePaginaNuevaPage } from './nomnbre-pagina-nueva.page';
import { Comp2InactivosComponent } from './comp2-inactivos/comp2-inactivos.component';
import { Comp3MostrarComponent } from './comp3-mostrar/comp3-mostrar.component';
import { Comp1ActivosComponent } from './comp1-activos/comp1-activos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomnbrePaginaNuevaPageRoutingModule
  ],
  declarations: [NomnbrePaginaNuevaPage,Comp2InactivosComponent,Comp3MostrarComponent, Comp1ActivosComponent]
})
export class NomnbrePaginaNuevaPageModule {}
