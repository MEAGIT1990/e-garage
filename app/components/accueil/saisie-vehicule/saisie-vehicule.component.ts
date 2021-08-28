import { Component, OnInit } from '@angular/core';

import { NbDialogService, NbComponentStatus} from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../core/services/rest-client.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { UserService } from '../../../core/services/user.service';
import { SaisieVehiculeModalComponent } from './saisie-vehicule-modal/saisie-vehicule-modal.component';

@Component({
  selector: 'ngx-saisie-vehicule',
  templateUrl: './saisie-vehicule.component.html',
  styleUrls: ['./saisie-vehicule.component.scss','../../../../assets/custom-style.css']
})
export class SaisieVehiculeComponent implements OnInit {

  status: NbComponentStatus = 'primary';

  page = 1;
  pageSize=10
  ListItems = []
  itemToSearch:any={};
  userData:any
  collectionSize: any;
  ListDataCouleur: any[];
  ListDataTypeCommerce: any[];
  ListDatasUsage: any[];
  ListDatasEnergie: any[];
  ListDatasClient: any;
  constructor(private dialogService: NbDialogService,
    private toasterService:ToasterService,private restClient:RestClientService,
    private userService:UserService,private spinner: NgxSpinnerService) {

      this.userData = userService.getUserData()
   }

  ngOnInit(): void {
    this.cancelData()
    this.getData()
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
  cancelData(){
    this.itemToSearch = {}
    this.itemToSearch.typeClientId=''
    this.itemToSearch.couleurId=''
    this.itemToSearch.typeCommerceId=''
    this.itemToSearch.usageId=''
    this.itemToSearch.energieId=''
    this.itemToSearch.clientId=''
  }
  getData(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      index: (this.page - 1),
      size: this.pageSize ? this.pageSize : null,
      data:{
        id: "",
        energieId: this.itemToSearch.energieId,
        libelle: this.itemToSearch.libelle,
        couleurId: this.itemToSearch.couleurId,
        typeCommerceId: this.itemToSearch.typeCommerceId,
        usageId: this.itemToSearch.usageId,
        clientId: this.itemToSearch.clientId,
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
            this.ListItems = []
          }
          else{
            this.ListItems = res.items
           
          }
          this.collectionSize= res.count
          console.log('ListItems',this.ListItems);
          
         
        }
        else{
          debugger
          this.ListItems = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListItems = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
        
        
      }

    );
    
    
  }
  onCreateData(data?) {
    console.log('data sent to modal',data);
    
   let dialogRef= this.dialogService.open(SaisieVehiculeModalComponent, {
      context: {
        title: data,
        
      }
    });

    dialogRef.onClose.subscribe(
      (result:any)=>{
        this.getData();
      }
    )

  }

  confirmDelete(data){
    Swal.fire({
      title: 'Suppression',
      text: 'Souhaitez vous poursuivre?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(data)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
      }
    })
  }

  deleteItem(data){
    let request = {
      user:this.userData.id,
      datas:[
        data
      ]  
    }

    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('vehicule','delete',request).subscribe(
      (res:any)=>{
        this.spinner.hide();

        console.log('res',res);
        if(res && !res.hasError){
          this.toasterService.showToast('success', 'Succès', res.status.message);
          this.getData()
        }
        else{
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

        
      },
      (err:any)=>{
        this.spinner.hide();
        this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
      }
    )
    
  }
  onEditData(data){
    
  }




  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  pageChange(event){
    this.ListItems = []
    console.log('event',event);
    this.page = event; 
    this.getData()

  }
}
