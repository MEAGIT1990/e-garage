import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';

const routes: Routes = [
  {
    path:'',component:AtelierComponent,
    children:[
      {
        path:'',redirectTo:'ordre-reparation',pathMatch:'full'
      },
      {
        path:'ordre-reparation',loadChildren:()=> import('./ordre-reparation/ordre-reparation.module').then(m=>m.OrdreReparationModule)
      },
      {
        path:'affectation',loadChildren:()=> import('./affectation/affectation.module').then(m=>m.AffectationModule)
      },
      
      {
        path:'intervention',loadChildren:()=> import('./intervention/intervention.module').then(m=>m.InterventionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
