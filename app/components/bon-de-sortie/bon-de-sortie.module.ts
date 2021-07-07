import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonDeSortieRoutingModule } from './bon-de-sortie-routing.module';
import { BonDeSortieComponent } from './bon-de-sortie.component';


@NgModule({
  declarations: [
    BonDeSortieComponent
  ],
  imports: [
    CommonModule,
    BonDeSortieRoutingModule
  ]
})
export class BonDeSortieModule { }
