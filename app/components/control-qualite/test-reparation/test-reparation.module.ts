import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestReparationRoutingModule } from './test-reparation-routing.module';
import { TestReparationComponent } from './test-reparation.component';



@NgModule({
  declarations: [
    TestReparationComponent
  ],
  imports: [
    CommonModule,
    TestReparationRoutingModule
  ]
})
export class TestReparationModule { }
