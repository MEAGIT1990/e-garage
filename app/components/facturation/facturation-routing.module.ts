import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturationComponent } from './facturation.component';

const routes: Routes = [
  {
    path:'',component:FacturationComponent,
    children:[
      {
        path:'',redirectTo:'edition-facture',pathMatch:'full'
      },
      {
        path:'edition-facture',loadChildren:()=>import('./edition-facture/edition-facture.module').then(m=>m.EditionFactureModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationRoutingModule { }
