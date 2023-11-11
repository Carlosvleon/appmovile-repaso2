import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoInterface2PageRoutingModule } from './uso-interface2-routing.module';

import { UsoInterface2Page } from './uso-interface2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoInterface2PageRoutingModule
  ],
  declarations: [UsoInterface2Page]
})
export class UsoInterface2PageModule {}
