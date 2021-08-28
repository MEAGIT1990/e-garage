import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClientModalComponent } from './client-modal/client-modal.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientModalComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
