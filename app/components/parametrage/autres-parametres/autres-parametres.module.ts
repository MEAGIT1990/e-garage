import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutresParametresRoutingModule } from './autres-parametres-routing.module';
import { AutresParametresComponent } from './autres-parametres.component';
import { SharedModule } from '../../../shared/shared.module';
import { CouleurComponent } from './couleur/couleur.component';
import { EnergieComponent } from './energie/energie.component';
import { MarqueComponent } from './marque/marque.component';
import { StatusComponent } from './status/status.component';
import { MarqueModalComponent } from './marque/marque-modal/marque-modal.component';
import { CouleurModalComponent } from './couleur/couleur-modal/couleur-modal.component';
import { EnergieModalComponent } from './energie/energie-modal/energie-modal.component';
import { StatusModalComponent } from './status/status-modal/status-modal.component';
import { TypeCommerceComponent } from './type-commerce/type-commerce.component';
import { TypeCommmerceModalComponent } from './type-commerce/type-commmerce-modal/type-commmerce-modal.component';
import { TypeClientComponent } from './type-client/type-client.component';
import { TypeClientModalComponent } from './type-client/type-client-modal/type-client-modal.component';
import { UsageComponent } from './usage/usage.component';
import { UsageModalComponent } from './usage/usage-modal/usage-modal.component';
import { EquipementComponent } from './equipement/equipement.component';
import { EquipementModalComponent } from './equipement/equipement-modal/equipement-modal.component';
import { DocumentModalComponent } from './document/document-modal/document-modal.component';
import { DocumentComponent } from './document/document.component';


@NgModule({
  declarations: [
    AutresParametresComponent,
    CouleurComponent,
    EnergieComponent,
    MarqueComponent,
    StatusComponent,
    MarqueModalComponent,
    CouleurModalComponent,
    EnergieModalComponent,
    StatusModalComponent,
    TypeCommerceComponent,
    TypeCommmerceModalComponent,
    TypeClientComponent,
    TypeClientModalComponent,
    UsageComponent,
    UsageModalComponent,
    EquipementComponent,
    EquipementModalComponent,
    DocumentModalComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule,
    AutresParametresRoutingModule,
    SharedModule
  ],
  
})
export class AutresParametresModule { }
