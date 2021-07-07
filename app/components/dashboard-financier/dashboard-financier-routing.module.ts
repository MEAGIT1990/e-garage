import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFinancierComponent } from './dashboard-financier.component';

const routes: Routes = [
  {
    path:'',component:DashboardFinancierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardFinancierRoutingModule { }
