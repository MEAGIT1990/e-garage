import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ouverture-dossier',
  templateUrl: './ouverture-dossier.component.html',
  styleUrls: ['./ouverture-dossier.component.scss']
})
export class OuvertureDossierComponent implements OnInit {
  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/layout/tabs/tab1',
    },
    {
      title: 'Route tab #2',
      route: '/pages/layout/tabs/tab2',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
