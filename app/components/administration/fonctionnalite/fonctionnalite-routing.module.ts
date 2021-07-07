import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FonctionnaliteComponent } from './fonctionnalite.component';

const routes: Routes = [
  {
    path:'',component:FonctionnaliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionnaliteRoutingModule { }
