import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutresParametresComponent } from './autres-parametres.component';

const routes: Routes = [
  {
    path:'',component:AutresParametresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutresParametresRoutingModule { }
