import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaisseComponent } from './caisse.component';

const routes: Routes = [
  {
    path:'',component:CaisseComponent,
    children:[
      {
        path:'',redirectTo:'reglement-accompte'
      },
      {
        path:'reglement-accompte',loadChildren:()=>import('./reglement-accompte/reglement-accompte.module').then(m=>m.ReglementAccompteModule)
      },
      {
        path:'reglement-facture',loadChildren:()=>import('./reglement-facture/reglement-facture.module').then(m=>m.ReglementFactureModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaisseRoutingModule { }
