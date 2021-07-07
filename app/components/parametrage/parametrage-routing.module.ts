import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './parametrage.component';

const routes: Routes = [
  {
    path:'',component:ParametrageComponent,
    children:[
      {
        path:'',redirectTo:'client'
      },
      {
        path:'client',loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrageRoutingModule { }
