import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingStrategy, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path:'',loadChildren:'./auth/auth.module#AuthModule'
    },
    {
        path:'admin',loadChildren:'./super-admin/super-admin.module#SuperAdminModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
