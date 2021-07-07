import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductionComponent } from './dashboard-production.component';

const routes: Routes = [
  {
    path:'',component:DashboardProductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProductionRoutingModule { }
