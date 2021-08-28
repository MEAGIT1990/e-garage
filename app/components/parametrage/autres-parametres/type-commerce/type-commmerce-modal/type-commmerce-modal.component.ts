import { Component, OnInit, Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService,NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../../core/services/toaster.service';
import { UserService } from '../../../../../core/services/user.service';
import { TypeClientModalComponent } from '../../type-client/type-client-modal/type-client-modal.component';


@Component({
  selector: 'ngx-type-commmerce-modal',
  templateUrl: './type-commmerce-modal.component.html',
  styleUrls: ['./type-commmerce-modal.component.scss','../../../../../../assets/custom-style.css']
})
export class TypeCommmerceModalComponent implements OnInit {

  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListItemsMarque: any[];
  constructor(protected ref: NbDialogRef<TypeClientModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()
    
  }
  ngOnInit(){
    console.log('title',this.title);
    this.itemToSave.marqueId=""
    if(this.title){
      this.itemToSave = {...this.title as any}
    }
    this.getDataMarque();

  }
  getDataMarque(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      
      data:{
        
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('marque','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();

        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListItemsMarque = []
          }
          else{
            this.ListItemsMarque = res.items
           
          }
         
        }
        else{
          this.ListItemsMarque = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListItemsMarque = []
          this.toasterService.showToast('danger', 'Erreur', 'Problème de communication');
        
        
      }

    );
    
    
  }

  dismiss() {
    this.ref.close();
  }

  confirmSave(data){
    if(!data.marqueId){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Marque');
      return
    }
    if(!data.libelle){
      this.toasterService.showToast('warning', 'Succès', 'Veuillez renseigner Libellé');
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
    this.restClient.execute('typeCommerce',data.id?'update':'create',request).subscribe(
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
        console.log('error',err);
        
      this.spinner.hide()
        this.toasterService.showToast('danger', 'Erreur', err.error.message || 'Problème de communication');
      }
    )
    
  }
}
