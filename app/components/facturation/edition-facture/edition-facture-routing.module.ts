import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionFactureComponent } from './edition-facture.component';

const routes: Routes = [
  {
    path:'',component:EditionFactureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionFactureRoutingModule { }
