import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoInterface2Page } from './uso-interface2.page';

const routes: Routes = [
  {
    path: '',
    component: UsoInterface2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoInterface2PageRoutingModule {}
