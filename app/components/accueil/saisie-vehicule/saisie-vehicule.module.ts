import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisieVehiculeRoutingModule } from './saisie-vehicule-routing.module';
import { SaisieVehiculeComponent } from './saisie-vehicule.component';


@NgModule({
  declarations: [
    SaisieVehiculeComponent
  ],
  imports: [
    CommonModule,
    SaisieVehiculeRoutingModule
  ]
})
export class SaisieVehiculeModule { }
