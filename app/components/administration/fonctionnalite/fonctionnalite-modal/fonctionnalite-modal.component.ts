import { Component, OnInit , Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../core/services/toaster.service';
import { UserService } from '../../../../core/services/user.service';
@Component({
  selector: 'ngx-fonctionnalite-modal',
  templateUrl: './fonctionnalite-modal.component.html',
  styleUrls: ['./fonctionnalite-modal.component.scss','../../../../../assets/custom-style.css']
})
export class FonctionnaliteModalComponent implements OnInit {
  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListDatasFonctionnaliteParent=[]
  constructor(protected ref: NbDialogRef<FonctionnaliteModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()
    
  }
  ngOnInit(){
    this.itemToSave.parentId=''
    this.getDataFonctionnalite()
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }

  }
  getDataFonctionnalite(){
    let request = {
      user:this.userData.id,
      data:{
      }  
    }
    console.log('data sent to server',JSON.stringify(request));
    this.spinner.show();
    this.restClient.execute('fonctionnalite','getByCriteria',request).subscribe(
      (res:any)=>{
        console.log('response',res);
        this.spinner.hide();
        if(res && !res.hasError){

          if(res.status.code ==903){
            this.ListDatasFonctionnaliteParent = []
          }
          else{
            this.ListDatasFonctionnaliteParent = res.items.filter(
              (ri:any)=>!ri.parentId
            )
           
          }
        }
        else{
          debugger
          this.ListDatasFonctionnaliteParent = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDatasFonctionnaliteParent = []
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
    this.restClient.execute('fonctionnalite',data.id?'update':'create',request).subscribe(
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
