import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [
    ClientsComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    OperatorRoutingModule
  ]
})
export class OperatorModule { }
