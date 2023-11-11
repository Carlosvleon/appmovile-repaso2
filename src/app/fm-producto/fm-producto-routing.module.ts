import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmProductoPage } from './fm-producto.page';

const routes: Routes = [
  {
    path: '',
    component: FmProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmProductoPageRoutingModule {}
