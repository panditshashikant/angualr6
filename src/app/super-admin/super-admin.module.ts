import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ],
  declarations: [SuperAdminComponent, DashboardComponent, ActivityComponent]
})
export class SuperAdminModule { }
