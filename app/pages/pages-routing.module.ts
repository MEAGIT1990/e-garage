import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard-production',
      component: ECommerceComponent,
    },
    {
      path: 'dashboard-production',
      loadChildren: () => import('../components/dashboard-production/dashboard-production.module')
        .then(m => m.DashboardProductionModule),
    },
    {
      path: 'dashboard-financier',
      loadChildren: () => import('../components/dashboard-financier/dashboard-financier.module')
        .then(m => m.DashboardFinancierModule),
    },
    {
      path: 'accueil',
      loadChildren: () => import('../components/accueil/accueil.module')
        .then(m => m.AccueilModule),
    },
    {
      path: 'diagnostic',
      loadChildren: () => import('../components/diagnostic/diagnostic.module')
        .then(m => m.DiagnosticModule),
    },
    {
      path: 'atelier',
      loadChildren: () => import('../components/atelier/atelier.module')
        .then(m => m.AtelierModule),
    },
    {
      path: 'control-qualite',
      loadChildren: () => import('../components/control-qualite/control-qualite.module')
        .then(m => m.ControlQualiteModule),
    },
    {
      path: 'bon-de-sortie',
      loadChildren: () => import('../components/bon-de-sortie/bon-de-sortie.module')
        .then(m => m.BonDeSortieModule),
    },
    {
      path: 'facturation',
      loadChildren: () => import('../components/facturation/facturation.module')
        .then(m => m.FacturationModule),
    },
    {
      path: 'caisse',
      loadChildren: () => import('../components/caisse/caisse.module')
        .then(m => m.CaisseModule),
    },
    {
      path: 'recouvrement',
      loadChildren: () => import('../components/recouvrement/recouvrement.module')
        .then(m => m.RecouvrementModule),
    },
    {
      path: 'parametrage',
      loadChildren: () => import('../components/parametrage/parametrage.module')
        .then(m => m.ParametrageModule),
    },
    {
      path: 'administration',
      loadChildren: () => import('../components/administration/administration.module')
        .then(m => m.AdministrationModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard-production',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
