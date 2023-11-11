import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmMenuPageRoutingModule } from './fm-menu-routing.module';

import { FmMenuPage } from './fm-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmMenuPageRoutingModule
  ],
  declarations: [FmMenuPage]
})
export class FmMenuPageModule {}
