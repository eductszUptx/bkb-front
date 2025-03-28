import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RentComponent } from './rent/rent.component';


@NgModule({
  declarations: [
    HomeComponent,
    GenresComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RentComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
