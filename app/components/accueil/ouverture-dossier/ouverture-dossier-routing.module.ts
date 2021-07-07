import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuvertureDossierComponent } from './ouverture-dossier.component';

const routes: Routes = [
  {
    path:'',component:OuvertureDossierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuvertureDossierRoutingModule { }
