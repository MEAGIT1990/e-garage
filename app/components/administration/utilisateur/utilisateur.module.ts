import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
import { UtilisateurModalComponent } from './utilisateur-modal/utilisateur-modal.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    UtilisateurComponent,
    UtilisateurModalComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    SharedModule
  ]
})
export class UtilisateurModule { }
