import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../pages/pages-menu';
@Component({
  selector: 'ngx-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
