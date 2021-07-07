import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlQualiteRoutingModule } from './control-qualite-routing.module';
import { ControlQualiteComponent } from './control-qualite.component';


@NgModule({
  declarations: [
    ControlQualiteComponent
  ],
  imports: [
    CommonModule,
    ControlQualiteRoutingModule
  ]
})
export class ControlQualiteModule { }
