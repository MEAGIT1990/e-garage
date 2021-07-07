import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecouvrementRoutingModule } from './recouvrement-routing.module';
import { RecouvrementComponent } from './recouvrement.component';


@NgModule({
  declarations: [
    RecouvrementComponent
  ],
  imports: [
    CommonModule,
    RecouvrementRoutingModule
  ]
})
export class RecouvrementModule { }
