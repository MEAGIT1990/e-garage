import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionRoutingModule } from './intervention-routing.module';
import { InterventionComponent } from './intervention.component';


@NgModule({
  declarations: [
    InterventionComponent
  ],
  imports: [
    CommonModule,
    InterventionRoutingModule
  ]
})
export class InterventionModule { }
