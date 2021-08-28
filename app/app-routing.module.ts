import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
    // children: [
    //   {
    //     path: '',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'login',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: NbRegisterComponent,
    //   },
    //   {
    //     path: 'logout',
    //     component: NbLogoutComponent,
    //   },
    //   {
    //     path: 'request-password',
    //     component: NbRequestPasswordComponent,
    //   },
    //   {
    //     path: 'reset-password',
    //     component: NbResetPasswordComponent,
    //   },
    // ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];


const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
