import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisieDiagnosticRoutingModule } from './saisie-diagnostic-routing.module';
import { SaisieDiagnosticComponent } from './saisie-diagnostic.component';


@NgModule({
  declarations: [
    SaisieDiagnosticComponent
  ],
  imports: [
    CommonModule,
    SaisieDiagnosticRoutingModule
  ]
})
export class SaisieDiagnosticModule { }
