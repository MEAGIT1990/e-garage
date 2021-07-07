import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecouvrementComponent } from './recouvrement.component';

const routes: Routes = [
  {
    path:'',component:RecouvrementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecouvrementRoutingModule { }
