import { Component, OnInit, Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../core/services/toaster.service';
import { UserService } from '../../../../core/services/user.service';
import * as moment from 'moment';
@Component({
  selector: 'ngx-saisie-vehicule-modal',
  templateUrl: './saisie-vehicule-modal.component.html',
  styleUrls: ['./saisie-vehicule-modal.component.scss','../../../../../assets/custom-style.css']
})
export class SaisieVehiculeModalComponent implements OnInit {
  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListDataTypeClient: any[];
  ListDatasUsage: any[];
  ListDataTypeCommerce: any;
  ListDataCouleur: any[];
  ListDatasEnergie: any[];
  ListDatasClient: any[];
  constructor(protected ref: NbDialogRef<SaisieVehiculeModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()

  }
  ngOnInit(){
    this.itemToSave.typeClientId=''
    this.itemToSave.couleurId=''
    this.itemToSave.typeCommerceId=''
    this.itemToSave.usageId=''
    this.itemToSave.energieId=''
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }
    this.itemToSave.clientId=''
    this.getDataUsage()
    this.getDataTypeCommerce()
    this.getDataCouleur()
    this.getDataEnergie()
    this.getDataClient()

  }

  getDataClient(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,

      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('client','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDatasClient = []
          }
          else{
            this.ListDatasClient = res.items

          }

        }
        else{
          this.ListDatasClient = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDatasClient = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  getDataEnergie(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,

      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('energie','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDatasEnergie = []
          }
          else{
            this.ListDatasEnergie = res.items

          }

        }
        else{
          this.ListDatasEnergie = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDatasEnergie = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  getDataUsage(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,

      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('usage','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDatasUsage = []
          }
          else{
            this.ListDatasUsage = res.items

          }

        }
        else{
          this.ListDatasUsage = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDatasUsage = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  getDataTypeCommerce(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('typeCommerce','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataTypeCommerce = []
          }
          else{
            this.ListDataTypeCommerce = res.items

          }

        }
        else{
          this.ListDataTypeCommerce = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataTypeCommerce = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  getDataCouleur(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('couleur','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataCouleur = []
          }
          else{
            this.ListDataCouleur = res.items

          }

        }
        else{
          this.ListDataCouleur = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataCouleur = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  dismiss() {
    this.ref.close();
  }

  confirmSave(data){
    // if(!data.code){
    //   this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Code');
    //   return
    // }
    if(!data.immatriculation){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Immatriculation');
      return
    }
    if(!data.numeroChassis){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Numero chassis');
      return
    }
    if(!data.nbrePorte){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Nombre de portes');
      return
    }
    if(!data.pressionPneu){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Pression pneu');
      return
    }
    if(!data.capaciteR){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Capacité reservoir');
      return
    }
    if(!data.energieId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Energie');
      return
    }
    if(!data.couleurId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Couleur');
      return
    }
    if(!data.typeCommerceId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Type commercial');
      return
    }
    if(!data.usageId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Usage');
      return
    }
    if(!data.clientId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Client');
      return
    }
    data.circulationAt = moment(data.circulationAt).format('DD/MM/YYYY')
    Swal.fire({
      title: data.id?"Mise à jour":"Enregistrement",
      text: 'Souhaitez vous poursuivre?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveItem(data)
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }

  saveItem(data){
    let request = {
      user:this.userData.id,
      datas:[
        data
      ]
    }

    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show()
    this.restClient.execute('vehicule',data.id?'update':'create',request).subscribe(
      (res:any)=>{
        console.log('res',res);
        this.spinner.hide()
        if(res && !res.hasError){
          this.toasterService.showToast('success', 'Succès', res.status.message);
          // this.MarqueComponent.getData()
          this.dismiss()

        }
        else{
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }


      },
      (err:any)=>{
      this.spinner.hide()
      this.toasterService.showToast('danger', 'Erreur', err.error.message || 'Problème de communication');

      }
    )

  }
}
