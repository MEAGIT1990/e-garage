import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierComponent } from './atelier.component';


@NgModule({
  declarations: [
    AtelierComponent
  ],
  imports: [
    CommonModule,
    AtelierRoutingModule
  ]
})
export class AtelierModule { }
