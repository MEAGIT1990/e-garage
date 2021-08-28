import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnaliteRoutingModule } from './fonctionnalite-routing.module';
import { FonctionnaliteComponent } from './fonctionnalite.component';
import { FonctionnaliteModalComponent } from './fonctionnalite-modal/fonctionnalite-modal.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    FonctionnaliteComponent,
    FonctionnaliteModalComponent
  ],
  imports: [
    CommonModule,
    FonctionnaliteRoutingModule,
    SharedModule
  ]
})
export class FonctionnaliteModule { }
