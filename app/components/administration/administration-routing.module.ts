import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path:'',component:AdministrationComponent,
    children:[
      {
        path:'',redirectTo:'utilisateur',pathMatch:'full'
      },
      {
        path:'utilisateur',loadChildren:()=>import('./utilisateur/utilisateur.module').then(m=>m.UtilisateurModule)
      },
      {
        path:'role',loadChildren:()=>import('./role/role.module').then(m=>m.RoleModule)
      },
      {
        path:'fonctionnalite',loadChildren:()=>import('./fonctionnalite/fonctionnalite.module').then(m=>m.FonctionnaliteModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
