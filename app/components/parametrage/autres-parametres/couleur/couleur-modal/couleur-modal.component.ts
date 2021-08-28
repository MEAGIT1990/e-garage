import { Component, OnInit, Input } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { RestClientService } from '../../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../../core/services/toaster.service';
import { UserService } from '../../../../../core/services/user.service';

@Component({
  selector: 'ngx-couleur-modal',
  templateUrl: './couleur-modal.component.html',
  styleUrls: ['./couleur-modal.component.scss','../../../../../../assets/custom-style.css']
})
export class CouleurModalComponent implements OnInit {

  @Input() title: string;
  itemToSave:any = {};
  userData:any
  constructor(protected ref: NbDialogRef<CouleurModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()
    
  }
  ngOnInit(){
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }

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
    this.restClient.execute('couleur',data.id?'update':'create',request).subscribe(
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
