import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmLoginPage } from './fm-login.page';

const routes: Routes = [
  {
    path: '',
    component: FmLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmLoginPageRoutingModule {}
