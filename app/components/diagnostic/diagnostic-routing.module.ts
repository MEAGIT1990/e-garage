import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticComponent } from './diagnostic.component';

const routes: Routes = [
  {
    path:'',
    component:DiagnosticComponent,
    children: [
      {
        path:'',redirectTo:'saisie-diagnostic',pathMatch:'full'
      },
      {
        path:'saisie-diagnostic',loadChildren: () => import('./saisie-diagnostic/saisie-diagnostic.module')
        .then(m => m.SaisieDiagnosticModule),
      },
      {
        path:'devis',loadChildren: () => import('./devis/devis.module')
        .then(m => m.DevisModule),
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticRoutingModule { }
