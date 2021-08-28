import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToasterService } from '../../core/services/toaster.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers:[ToasterService]
})
export class AuthComponent implements OnInit {

  constructor(private toasterService:ToasterService,private router:Router) { 

  }

  ngOnInit(): void {
    console.log('Hello fucking');

    
  }

  onSubmit(form: NgForm){
    let user=form.value
    console.log('user',user);
    this.router.navigate(['/pages'])
    // if(!user.login){
    // this.toasterService.showToast('danger', 'Erreur', 'Veuillez renseigner Login');
    // return
    // }
    // if(!user.password){
    //   this.toasterService.showToast('danger', 'Erreur', 'Veuillez renseigner Mot de passe');
    //   return
    //   }
    

    
  }
}
