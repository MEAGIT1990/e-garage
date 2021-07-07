import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlQualiteComponent } from './control-qualite.component';

const routes: Routes = [
  {
    path:'',component:ControlQualiteComponent,
    children:[
      {
        path:'',redirectTo:'test-reparation'
      },
      {
        path:'test-reparation',loadChildren:()=>import('./test-reparation/test-reparation.module').then(m=>m.TestReparationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlQualiteRoutingModule { }
