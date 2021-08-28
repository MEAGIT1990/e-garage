import { Component, OnInit, Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../core/services/toaster.service';
import { UserService } from '../../../../core/services/user.service';


@Component({
  selector: 'ngx-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss','../../../../../assets/custom-style.css']
})
export class ClientModalComponent implements OnInit {

  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListDataTypeClient: any[];
  ListDataTypeUser: any[];
  constructor(protected ref: NbDialogRef<ClientModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()

  }
  ngOnInit(){
    this.itemToSave.typeClientId=''
    this.itemToSave.typeUserId=''
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }
    this.getDataTypeClient()
    this.getDataTypeUser()

  }
  getDataTypeUser(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('typeUser','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataTypeUser = []
          }
          else{
            this.ListDataTypeUser = res.items

          }

        }
        else{
          this.ListDataTypeUser = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataTypeUser = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');


      }

    );


  }

  getDataTypeClient(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('typeClient','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataTypeClient = []
          }
          else{
            this.ListDataTypeClient = res.items

          }

        }
        else{
          this.ListDataTypeClient = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataTypeClient = []
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
    if(!data.raisonSociale){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Raison sociale');
      return
    }
    if(!data.typeClientId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Type client');
      return
    }
    if(!data.situationGeo){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Lieu de résidence');
      return
    }
    if(!data.contact){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Contact');
      return
    }
   
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
    this.restClient.execute('client',data.id?'update':'create',request).subscribe(
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
