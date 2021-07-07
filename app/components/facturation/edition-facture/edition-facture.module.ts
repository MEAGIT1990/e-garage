import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionFactureRoutingModule } from './edition-facture-routing.module';
import { EditionFactureComponent } from './edition-facture.component';


@NgModule({
  declarations: [
    EditionFactureComponent
  ],
  imports: [
    CommonModule,
    EditionFactureRoutingModule
  ]
})
export class EditionFactureModule { }
