import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmLoginPageRoutingModule } from './fm-login-routing.module';

import { FmLoginPage } from './fm-login.page';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FmLoginPageRoutingModule
  ],
  declarations: [FmLoginPage]
})
export class FmLoginPageModule {}
