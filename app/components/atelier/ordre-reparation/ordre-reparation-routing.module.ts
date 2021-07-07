import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdreReparationComponent } from './ordre-reparation.component';

const routes: Routes = [
  {
    path:'',component:OrdreReparationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdreReparationRoutingModule { }
