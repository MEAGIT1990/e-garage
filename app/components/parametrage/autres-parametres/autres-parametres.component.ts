import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-autres-parametres',
  templateUrl: './autres-parametres.component.html',
  styleUrls: ['./autres-parametres.component.scss']
})
export class AutresParametresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onChangeTab(event){
    console.log('event',event);
    
  }

}
