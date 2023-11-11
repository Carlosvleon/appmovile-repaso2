import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nomnbre-pagina-nueva',
    loadChildren: () => import('./nomnbre-pagina-nueva/nomnbre-pagina-nueva.module').then( m => m.NomnbrePaginaNuevaPageModule)
  },
  {
    path: 'ciclo-vida',
    loadChildren: () => import('./ciclo-vida/ciclo-vida.module').then( m => m.CicloVidaPageModule)
  },
  {
    path: 'uso-interface2',
    loadChildren: () => import('./uso-interface2/uso-interface2.module').then( m => m.UsoInterface2PageModule)
  },
  {
    path: 'fm-login',
    loadChildren: () => import('./fm-login/fm-login.module').then( m => m.FmLoginPageModule)
  },
  {
    path: 'fm-menu',
    loadChildren: () => import('./fm-menu/fm-menu.module').then( m => m.FmMenuPageModule)
  },
  {
    path: 'fm-producto',
    loadChildren: () => import('./fm-producto/fm-producto.module').then( m => m.FmProductoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
