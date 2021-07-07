import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonDeSortieModule } from './bon-de-sortie.module';
import { BonDeSortieComponent } from './bon-de-sortie.component';

const routes: Routes = [
  {
    path:'',component:BonDeSortieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonDeSortieRoutingModule { }
