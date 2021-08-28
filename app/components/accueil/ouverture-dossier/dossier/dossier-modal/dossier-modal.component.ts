import { Component, OnInit, Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { ClientModalComponent } from '../../../client/client-modal/client-modal.component';
import { RestClientService } from '../../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../../core/services/toaster.service';
import { UserService } from '../../../../../core/services/user.service';
import * as moment from 'moment';
@Component({
  selector: 'ngx-dossier-modal',
  templateUrl: './dossier-modal.component.html',
  styleUrls: ['./dossier-modal.component.scss','../../../../../../assets/custom-style.css']
})
export class DossierModalComponent implements OnInit {
  date = new Date();
  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListDataTypeClient: any[];
  ListDataVehicule: any[];
  ListDataStatut: any[];
  ListDataDocument: any[];
  ListDataEquipement: any[];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownSettingsDocument= {};
  dropdownSettingsEquipement= {};
  minDate = moment().add(1, 'days').toDate();
  selectedItemsDocument=[];
  selectedItemsEquipement=[];
  constructor(protected ref: NbDialogRef<DossierModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()
    
  }
  ngOnInit(){
    this.itemToSave.vehiculeId=''
    this.itemToSave.statutId=''
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }
    this.getDataVehicule()
    this.getDataStatut()
    this.getDataDocument()
    this.getDataEquipement()
    this.dropdownSettingsDocument = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    this.dropdownSettingsEquipement = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    

  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getDataEquipement(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('equipement','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataEquipement = []
          }
          else{
            this.ListDataEquipement = res.items
           
          }
         
        }
        else{
          this.ListDataEquipement = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataEquipement = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
        
        
      }

    );
    
    
  }
  getDataDocument(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('documents','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataDocument = []
          }
          else{
            this.ListDataDocument = res.items
           
          }
         
        }
        else{
          this.ListDataDocument = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataDocument = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
        
        
      }

    );
    
    
  }
  getDataStatut(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('statut','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataStatut = []
          }
          else{
            this.ListDataStatut = res.items
           
          }
         
        }
        else{
          this.ListDataStatut = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataStatut = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
        
        
      }

    );
    
    
  }
  getDataVehicule(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('vehicule','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDataVehicule = []
          }
          else{
            this.ListDataVehicule = res.items
           
          }
         
        }
        else{
          this.ListDataVehicule = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataVehicule = []
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
    if(!data.vehiculeId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Véhicule');
      return
    }
    // if(!data.statutId){
    //   this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Statut');
    //   return
    // }
    if(!data.datasDocument.length){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Documents');
      return
    }
    if(!data.datasEquipement.length){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Equipements');
      return
    }
    
    if(!data.ressenti){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Ressenti');
      return
    }
    if(!data.id){
      data.enteredAt = moment().format('DD/MM/YYYY HH:mm:ss')
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
    let dataCopy = {...data};
    dataCopy.datasDocument=dataCopy.datasDocument.map(
      (sid:any)=>{
        return {id:sid.id}
      }
    )
    dataCopy.datasEquipement=dataCopy.datasEquipement.map(
      (sie:any)=>{
        return {id:sie.id}
      }
    )
   
    let request = {
      user:this.userData.id,
      datas:[
        dataCopy
      ]  
    }

    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show()
    this.restClient.execute('dossier',data.id?'update':'create',request).subscribe(
      (res:any)=>{
        console.log('res',res);
        this.spinner.hide()
        if(res && !res.hasError){
          this.toasterService.showToast('success', 'Succès', res.status.message);
          // this.MarqueComponent.getData()
          this.resetForm()
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
  resetForm() {
    this.itemToSave = {};
  }
}
