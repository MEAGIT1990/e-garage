import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementAccompteRoutingModule } from './reglement-accompte-routing.module';
import { ReglementAccompteComponent } from './reglement-accompte.component';


@NgModule({
  declarations: [
    ReglementAccompteComponent
  ],
  imports: [
    CommonModule,
    ReglementAccompteRoutingModule
  ]
})
export class ReglementAccompteModule { }
