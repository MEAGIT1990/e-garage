import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './parametrage.component';

const routes: Routes = [
  {
    path:'',component:ParametrageComponent,
    children:[
      {
        path:'autres-parametres',redirectTo:'type-client'
      },
     
      {
        path:'autres-parametres',loadChildren:()=>import('./autres-parametres/autres-parametres.module').then(m=>m.AutresParametresModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrageRoutingModule { }
