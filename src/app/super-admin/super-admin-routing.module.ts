import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/super-admin/dashboard/dashboard.component';
import { ActivityComponent } from 'src/app/super-admin/activity/activity.component';
import { SuperAdminComponent } from 'src/app/super-admin/super-admin.component';

const routes: Routes = [
  {
    path:'',component:SuperAdminComponent,
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'activity',component:ActivityComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
