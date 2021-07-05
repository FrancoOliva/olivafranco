import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ 
    `
    a {
      cursor: pointer;
    }
    `
   ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }

  ngOnInit(): void {

    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
  }];


  }

}
