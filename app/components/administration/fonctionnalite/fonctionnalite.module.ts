import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnaliteRoutingModule } from './fonctionnalite-routing.module';
import { FonctionnaliteComponent } from './fonctionnalite.component';


@NgModule({
  declarations: [
    FonctionnaliteComponent
  ],
  imports: [
    CommonModule,
    FonctionnaliteRoutingModule
  ]
})
export class FonctionnaliteModule { }
