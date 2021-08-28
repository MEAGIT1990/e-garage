import { Component, OnInit } from '@angular/core';

import { NbDialogService, NbComponentStatus} from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../core/services/rest-client.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { UserService } from '../../../core/services/user.service';
import { ClientModalComponent } from './client-modal/client-modal.component';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss','../../../../assets/custom-style.css']
})
export class ClientComponent implements OnInit {
  status: NbComponentStatus = 'primary';

  page = 1;
  pageSize=10
  ListItems = []
  itemToSearch:any={};
  userData:any
  collectionSize: any;
  ListDataTypeClient: any[];
  ListDataTypeUser: any[];
  constructor(private dialogService: NbDialogService,
    private toasterService:ToasterService,private restClient:RestClientService,
    private userService:UserService,private spinner: NgxSpinnerService) {

      this.userData = userService.getUserData()
   }

  ngOnInit(): void {
    
    this.cancelData()
    this.getData()
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
  
  cancelData(){
    this.itemToSearch = {}
    this.itemToSearch.typeUserId=''
    this.itemToSearch.typeClientId=''
  }
  getData(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      index: (this.page - 1),
      size: this.pageSize ? this.pageSize : null,
      data:{
        // id: "",
        typeClientId: this.itemToSearch.typeClientId,
        raisonSociale: this.itemToSearch.raisonSociale,
        situationGeo: this.itemToSearch.situationGeo,

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
    
   let dialogRef= this.dialogService.open(ClientModalComponent, {
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
    this.restClient.execute('client','delete',request).subscribe(
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
