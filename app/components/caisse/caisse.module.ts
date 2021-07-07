import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaisseRoutingModule } from './caisse-routing.module';
import { CaisseComponent } from './caisse.component';


@NgModule({
  declarations: [
    CaisseComponent
  ],
  imports: [
    CommonModule,
    CaisseRoutingModule
  ]
})
export class CaisseModule { }
