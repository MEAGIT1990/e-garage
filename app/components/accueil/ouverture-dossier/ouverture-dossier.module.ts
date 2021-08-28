import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuvertureDossierRoutingModule } from './ouverture-dossier-routing.module';
import { OuvertureDossierComponent } from './ouverture-dossier.component';
import { SharedModule } from '../../../shared/shared.module';
import { DossierComponent } from './dossier/dossier.component';
import { DossierModalComponent } from './dossier/dossier-modal/dossier-modal.component';
import { EffetPersonelComponent } from './effet-personel/effet-personel.component';
import { EffetPersonnelModalComponent } from './effet-personel/effet-personnel-modal/effet-personnel-modal.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    OuvertureDossierComponent,
    DossierComponent,
    DossierModalComponent,
    EffetPersonelComponent,
    EffetPersonnelModalComponent,
  ],
  imports: [
    CommonModule,
    OuvertureDossierRoutingModule,
    SharedModule,
    MatSelectModule,

  ]
})
export class OuvertureDossierModule { }
