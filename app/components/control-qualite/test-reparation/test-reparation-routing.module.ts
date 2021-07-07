import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestReparationComponent } from './test-reparation.component';

const routes: Routes = [
  {
    path:'',component:TestReparationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestReparationRoutingModule { }
