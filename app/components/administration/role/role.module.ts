import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RoleModalComponent } from './role-modal/role-modal.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    RoleComponent,
    RoleModalComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule
  ]
})
export class RoleModule { }
