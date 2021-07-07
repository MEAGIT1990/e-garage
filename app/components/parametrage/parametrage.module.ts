import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrageRoutingModule } from './parametrage-routing.module';
import { ParametrageComponent } from './parametrage.component';


@NgModule({
  declarations: [
    ParametrageComponent
  ],
  imports: [
    CommonModule,
    ParametrageRoutingModule
  ]
})
export class ParametrageModule { }
