import { Component, OnInit } from '@angular/core';

import { NbDialogService, NbComponentStatus} from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { ToasterService } from '../../../../core/services/toaster.service';
import { RestClientService } from '../../../../core/services/rest-client.service';
import { UserService } from '../../../../core/services/user.service';
import { EquipementModalComponent } from './equipement-modal/equipement-modal.component';

@Component({
  selector: 'ngx-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss','../../../../../assets/custom-style.css']
})
export class EquipementComponent implements OnInit {
  status: NbComponentStatus = 'primary';
  config={
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: ""
  };

  p=0;
  ListItems = []
  itemToSearch:any={};
  userData:any
  constructor(private dialogService: NbDialogService,
    private toasterService:ToasterService,private restClient:RestClientService,
    private userService:UserService,private spinner: NgxSpinnerService) {

      this.userData = userService.getUserData()
   }

  ngOnInit(): void {
    this.getData()
  }
  cancelData(){
    this.itemToSearch = {}
  }
  getData(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      index: (this.config.currentPage - 1),
      size: this.config.itemsPerPage ? this.config.itemsPerPage : null,
      data:{
        id: "",
        code: this.itemToSearch.code,
        libelle: this.itemToSearch.libelle,
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
            this.ListItems = []
          }
          else{
            this.ListItems = res.items
           
          }
          this.config.totalItems= res.count
         
        }
        else{
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
    
   let dialogRef= this.dialogService.open(EquipementModalComponent, {
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
    this.restClient.execute('equipement','delete',request).subscribe(
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
    this.config.currentPage = event; 
    console.log('event',event);
    this.getData()
  }
}
