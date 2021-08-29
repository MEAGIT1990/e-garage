import { Component, OnInit } from '@angular/core';

import { NbDialogService, NbComponentStatus} from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { ToasterService } from '../../../../core/services/toaster.service';
import { RestClientService } from '../../../../core/services/rest-client.service';
import { UserService } from '../../../../core/services/user.service';
import { DossierModalComponent } from './dossier-modal/dossier-modal.component';

@Component({
  selector: 'ngx-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss','../../../../../assets/custom-style.css']
})
export class DossierComponent implements OnInit {
  status: NbComponentStatus = 'primary';

  page = 1;
  pageSize=10
  ListItems = []
  itemToSearch:any={};
  userData:any
  collectionSize: any;
  ListDataStatuts: any[];
  ListDataStatut: any[];
  ListDataVehicule: any[];
  constructor(private dialogService: NbDialogService,
    private toasterService:ToasterService,private restClient:RestClientService,
    private userService:UserService,private spinner: NgxSpinnerService) {

      this.userData = userService.getUserData()
   }

  ngOnInit(): void {
    this.cancelData()
    this.getData()
    this.getDataVehicule()
    this.getDataStatut()
  }
  cancelData(){
    this.itemToSearch = {}
    this.itemToSearch.vehiculeId=''
    this.itemToSearch.statutId=''
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

  getData(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      index: (this.page - 1),
      size: this.pageSize ? this.pageSize : null,
      data:{
        id: "",
        statutId: this.itemToSearch.statutId,
        vehiculeId: this.itemToSearch.vehiculeId,
        libelle: this.itemToSearch.libelle,
        code:this.itemToSearch.code,
        vehiculeImmatriculation:this.itemToSearch.vehiculeImmatriculation
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('dossier','getByCriteria',request).subscribe(
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
    
   let dialogRef= this.dialogService.open(DossierModalComponent, {
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
    this.restClient.execute('dossier','delete',request).subscribe(
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
