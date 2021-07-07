import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaisieVehiculeComponent } from './saisie-vehicule.component';

const routes: Routes = [
  {
    path:'',component:SaisieVehiculeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaisieVehiculeRoutingModule { }
