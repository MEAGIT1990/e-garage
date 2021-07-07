import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaisieDiagnosticComponent } from './saisie-diagnostic.component';

const routes: Routes = [
  {
    path:'',component:SaisieDiagnosticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaisieDiagnosticRoutingModule { }
