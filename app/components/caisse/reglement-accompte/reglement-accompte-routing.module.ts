import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglementAccompteComponent } from './reglement-accompte.component';

const routes: Routes = [
  {
    path:'',component:ReglementAccompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementAccompteRoutingModule { }
