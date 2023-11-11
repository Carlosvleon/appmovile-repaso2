import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmProductoPageRoutingModule } from './fm-producto-routing.module';

import { FmProductoPage } from './fm-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmProductoPageRoutingModule
  ],
  declarations: [FmProductoPage]
})
export class FmProductoPageModule {}
