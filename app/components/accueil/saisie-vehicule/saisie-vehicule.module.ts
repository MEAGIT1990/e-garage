import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisieVehiculeRoutingModule } from './saisie-vehicule-routing.module';
import { SaisieVehiculeComponent } from './saisie-vehicule.component';
import { SaisieVehiculeModalComponent } from './saisie-vehicule-modal/saisie-vehicule-modal.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SaisieVehiculeComponent,
    SaisieVehiculeModalComponent
  ],
  imports: [
    CommonModule,
    SaisieVehiculeRoutingModule,
    SharedModule
  ]
})
export class SaisieVehiculeModule { }
