import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef, NbToastrService, NbDialogService } from '@nebular/theme';
import { UserService } from '../../../../../core/services/user.service';
import { RestClientService } from '../../../../../core/services/rest-client.service';
import { ToasterService } from '../../../../../core/services/toaster.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-document-modal',
  templateUrl: './document-modal.component.html',
  styleUrls: ['./document-modal.component.scss','../../../../../../assets/custom-style.css']
})
export class DocumentModalComponent implements OnInit {

  @Input() title: string;
  itemToSave:any = {};
  userData:any
  ListDataDossier: any[];
  constructor(protected ref: NbDialogRef<DocumentModalComponent>,private dialogService: NbDialogService,
    private toastrService: NbToastrService,private restClient:RestClientService,
    private userService:UserService,private toasterService:ToasterService,private spinner: NgxSpinnerService) {
      this.userData = userService.getUserData()
    
  }
  ngOnInit(){
    this.itemToSave.dossierId=''
    console.log('title',this.title);
    if(this.title){
      this.itemToSave = {...this.title as any}
    }
    this.getDataDossier()
    

  }
  getDataDossier(){
    let request = {
      user:this.userData.id,
      isSimpleLoading:false,
      data:{
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
            this.ListDataDossier = []
          }
          else{
            this.ListDataDossier = res.items
           
          }
         
        }
        else{
          this.ListDataDossier = []
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }
        
      },
      (error:any)=>{
        this.spinner.hide();
          this.ListDataDossier = []
          this.toasterService.showToast('danger', 'Erreur', 'Probl??me de communication');
        
        
      }

    );
    
    
  }
  

  dismiss() {
    this.ref.close();
  }

  confirmSave(data){
    // if(!data.code){
    //   this.toasterService.showToast('warning', 'Succ??s', 'Veuillez renseigner Code');
    //   return
    // }
    if(!data.libelle){
      this.toasterService.showToast('warning', 'Succ??s', 'Veuillez renseigner Libell??');
      return
    }
    Swal.fire({
      title: data.id?"Mise ?? jour":"Enregistrement",
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
    this.restClient.execute('documents',data.id?'update':'create',request).subscribe(
      (res:any)=>{
        console.log('res',res);
        this.spinner.hide()
        if(res && !res.hasError){
          this.toasterService.showToast('success', 'Succ??s', res.status.message);
          // this.MarqueComponent.getData()
          this.dismiss()
          
        }
        else{
          this.toasterService.showToast('danger', 'Erreur', res.status.message);
        }

        
      },
      (err:any)=>{
      this.spinner.hide()
      this.toasterService.showToast('danger', 'Erreur', err.error.message || 'Probl??me de communication');

      }
    )
    
  }
}
