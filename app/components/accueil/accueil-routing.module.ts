import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil.component';

const routes: Routes = [
  {
    path:'',component:AccueilComponent,
    children:[
      {
        path:'',
        redirectTo:'ouverture-dossier',pathMatch:'full'
      },
      {
        path:'ouverture-dossier',
        loadChildren: () => import('./ouverture-dossier/ouverture-dossier.module')
        .then(m => m.OuvertureDossierModule),
      },
      {
        path:'saisie-vehicule',
        loadChildren: () => import('./saisie-vehicule/saisie-vehicule.module')
        .then(m => m.SaisieVehiculeModule),
      },
      {
        path:'client',
        loadChildren: () => import('./client/client.module')
        .then(m => m.ClientModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
