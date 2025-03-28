import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GenresComponent } from './genres/genres.component';
import { PlansComponent } from './plans/plans.component';
import { StreamingsComponent } from './streamings/streamings.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    GenresComponent,
    PlansComponent,
    StreamingsComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
