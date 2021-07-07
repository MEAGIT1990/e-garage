import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdreReparationRoutingModule } from './ordre-reparation-routing.module';
import { OrdreReparationComponent } from './ordre-reparation.component';


@NgModule({
  declarations: [
    OrdreReparationComponent
  ],
  imports: [
    CommonModule,
    OrdreReparationRoutingModule
  ]
})
export class OrdreReparationModule { }
