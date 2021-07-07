import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuvertureDossierRoutingModule } from './ouverture-dossier-routing.module';
import { OuvertureDossierComponent } from './ouverture-dossier.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    OuvertureDossierComponent
  ],
  imports: [
    CommonModule,
    OuvertureDossierRoutingModule,
    SharedModule
  ]
})
export class OuvertureDossierModule { }
